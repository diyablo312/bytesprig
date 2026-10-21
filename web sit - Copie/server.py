import json
import os
import platform
import re
import sys
import time
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import inspect, select, text
from werkzeug.security import check_password_hash, generate_password_hash


ROOT = Path(__file__).resolve().parent
STARTED_AT = time.time()
app = Flask(__name__, static_folder=None)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "local-development-key-change-before-deploy")
app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"
app.config["SESSION_COOKIE_SECURE"] = os.environ.get("COOKIE_SECURE", "false").lower() == "true"
app.config["PERMANENT_SESSION_LIFETIME"] = 60 * 60 * 24 * 30

database_url = os.environ.get("DATABASE_URL", "").strip()
if database_url.startswith("postgres://"):
    database_url = "postgresql+psycopg://" + database_url.removeprefix("postgres://")
elif database_url.startswith("postgresql://"):
    database_url = "postgresql+psycopg://" + database_url.removeprefix("postgresql://")
if not database_url:
    database_url = f"sqlite:///{(ROOT / 'pypath.sqlite3').as_posix()}"

app.config["SQLALCHEMY_DATABASE_URI"] = database_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Account(db.Model):
    __tablename__ = "accounts"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(254), unique=True, nullable=False, index=True)
    name = db.Column(db.String(80), nullable=False)
    salt = db.Column(db.String(64), nullable=False, default="")
    password_hash = db.Column(db.String(256), nullable=False)
    progress = db.Column(db.Text, nullable=False, default="{}")
    created_at = db.Column(db.Integer, nullable=False, default=0)
    role = db.Column(db.String(16), nullable=False, default="student")
    last_login_at = db.Column(db.Integer, nullable=True)


with app.app_context():
    db.create_all()
    account_columns = {column["name"] for column in inspect(db.engine).get_columns("accounts")}
    if "role" not in account_columns:
        db.session.execute(text("ALTER TABLE accounts ADD COLUMN role VARCHAR(16) NOT NULL DEFAULT 'student'"))
        db.session.commit()
    if "last_login_at" not in account_columns:
        db.session.execute(text("ALTER TABLE accounts ADD COLUMN last_login_at INTEGER"))
        db.session.commit()


def current_account():
    account_id = session.get("account_id")
    if not account_id:
        return None
    return db.session.get(Account, account_id)


def public_account(account):
    return {"email": account.email, "name": account.name, "role": account.role}


def promote_admin(email):
    normalized_email = email.strip().lower()
    with app.app_context():
        account = db.session.scalar(select(Account).where(Account.email == normalized_email))
        if not account:
            return False
        account.role = "admin"
        db.session.commit()
        return True


@app.get("/")
def home():
    return send_from_directory(ROOT, "index.html")


@app.get("/app.js")
@app.get("/styles.css")
def static_assets():
    filename = request.path.lstrip("/")
    return send_from_directory(ROOT, filename)


@app.get("/healthz")
def health_check():
    try:
        db.session.execute(select(1))
    except Exception:
        app.logger.exception("Health check failed")
        return jsonify({"status": "unavailable"}), 503
    return jsonify({"status": "ok"})


@app.get("/api/me")
def get_current_user():
    account = current_account()
    return jsonify({"user": public_account(account) if account else None})


@app.get("/api/progress")
def get_progress():
    account = current_account()
    if not account:
        return jsonify({"error": "Please sign in again."}), 401
    return jsonify({"progress": json.loads(account.progress)})


@app.get("/api/admin/users")
def admin_users():
    account = current_account()
    if not account:
        return jsonify({"error": "Please sign in."}), 401
    if account.role != "admin":
        return jsonify({"error": "Administrator access required."}), 403
    accounts = db.session.scalars(select(Account).order_by(Account.created_at, Account.email)).all()
    current_time = int(time.time())
    users = []
    for user in accounts:
        progress = json.loads(user.progress)
        users.append({
            "name": user.name,
            "email": user.email,
            "role": user.role,
            "completed": len(progress.get("completed", [])),
            "xp": progress.get("xp", 0),
            "lastLoginAt": user.last_login_at,
        })
    recent_sign_ins = sum(user.last_login_at is not None and user.last_login_at >= current_time - 86_400 for user in accounts)
    return jsonify({"users": users, "totalUsers": len(users), "recentSignIns": recent_sign_ins})


@app.get("/api/admin/system")
def admin_system():
    account = current_account()
    if not account:
        return jsonify({"error": "Please sign in."}), 401
    if account.role != "admin":
        return jsonify({"error": "Administrator access required."}), 403
    database_backend = db.engine.url.get_backend_name()
    try:
        db.session.execute(select(1))
        database_status = "Connected"
    except Exception:
        db.session.rollback()
        database_status = "Unavailable"
    storage_bytes = None
    if database_backend == "sqlite":
        database_path = db.engine.url.database
        if database_path and Path(database_path).is_file():
            storage_bytes = Path(database_path).stat().st_size
    hosted = any(os.environ.get(key) for key in ("RENDER", "RAILWAY_ENVIRONMENT", "DYNO"))
    return jsonify({
        "deployment": "Hosted" if hosted else "Local development",
        "runtime": f"Python {platform.python_version()}",
        "database": "PostgreSQL" if database_backend == "postgresql" else "SQLite",
        "databaseStatus": database_status,
        "storageBytes": storage_bytes,
        "uptimeSeconds": max(0, int(time.time() - STARTED_AT)),
    })


@app.put("/api/progress")
def update_progress():
    account = current_account()
    if not account:
        return jsonify({"error": "Please sign in again."}), 401
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Progress data is invalid."}), 400
    progress = {
        "completed": data.get("completed", []),
        "xp": data.get("xp", 0),
        "hearts": data.get("hearts", 5),
        "streak": data.get("streak", 0),
        "lastStudyDate": data.get("lastStudyDate", ""),
        "lastHeartDate": data.get("lastHeartDate", ""),
        "skillLevel": data.get("skillLevel"),
    }
    if (
        not isinstance(progress["completed"], list)
        or any(not isinstance(item, int) or item < 0 or item > 19 for item in progress["completed"])
        or any(not isinstance(progress[key], int) or progress[key] < 0 for key in ("xp", "hearts", "streak"))
        or not isinstance(progress["lastHeartDate"], str)
        or progress["skillLevel"] not in (None, "Beginner", "Some experience", "Experienced")
    ):
        return jsonify({"error": "Progress data is invalid."}), 400
    account.progress = json.dumps(progress)
    db.session.commit()
    return jsonify({"ok": True})


@app.post("/api/register")
def register():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Please submit valid account details."}), 400
    email = str(data.get("email", "")).strip().lower()
    name = str(data.get("name", "")).strip()
    password = data.get("password", "")
    if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email):
        return jsonify({"error": "Enter a valid email address."}), 400
    if len(name) < 2 or len(name) > 80:
        return jsonify({"error": "Your name must be between 2 and 80 characters."}), 400
    if not isinstance(password, str) or len(password) < 8 or len(password) > 256:
        return jsonify({"error": "Password must be at least 8 characters."}), 400
    if db.session.scalar(select(Account.id).where(Account.email == email)):
        return jsonify({"error": "An account with this email already exists."}), 409
    created_at = int(time.time())
    account = Account(
        email=email,
        name=name,
        password_hash=generate_password_hash(password),
        progress="{}",
        created_at=created_at,
        last_login_at=created_at,
    )
    db.session.add(account)
    db.session.commit()
    session.clear()
    session["account_id"] = account.id
    session.permanent = True
    return jsonify({"user": public_account(account), "progress": {}}), 201


@app.post("/api/login")
def login():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Please submit valid account details."}), 400
    email = str(data.get("email", "")).strip().lower()
    password = data.get("password", "")
    account = db.session.scalar(select(Account).where(Account.email == email))
    if not account or not isinstance(password, str) or not check_password_hash(account.password_hash, password):
        return jsonify({"error": "Email or password is incorrect."}), 401
    account.last_login_at = int(time.time())
    db.session.commit()
    session.clear()
    session["account_id"] = account.id
    session.permanent = True
    return jsonify({"user": public_account(account)})


@app.post("/api/logout")
def logout():
    session.clear()
    return jsonify({"ok": True})


if __name__ == "__main__":
    if len(sys.argv) == 3 and sys.argv[1] == "promote-admin":
        if promote_admin(sys.argv[2]):
            print(f"Administrator role assigned to {sys.argv[2].strip().lower()}.")
            raise SystemExit(0)
        print("Account not found. The person must create an account before promotion.")
        raise SystemExit(1)
    app.run(host="127.0.0.1", port=int(os.environ.get("PORT", "8000")), debug=True)
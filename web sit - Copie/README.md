# ByteSprig

A Python-learning app with a Flask account API and per-user progress.

## Run locally on Windows

1. Install Python 3.11 or newer.
2. Double-click `start-pypath.bat`.
3. Open `http://127.0.0.1:8000`.

The launcher creates a virtual environment and installs the packages from `requirements.txt` the first time. Local development uses the existing `pypath.sqlite3` file to preserve saved accounts and progress.

## Deploy on Render

The included `render.yaml` prepares the web service. Accounts need a PostgreSQL database that remains available between deploys; do not use the local SQLite database for a public service.

1. Create a GitHub account and a new repository for this project.
2. Upload the project files. Do not upload `.venv`, `.env`, or any `*.sqlite3` database.
3. Create a PostgreSQL database with a provider such as Neon. Copy its PostgreSQL connection string; do not put it in a project file.
4. In Render, create a Blueprint and connect the GitHub repository containing `render.yaml`.
5. When Render requests `DATABASE_URL`, enter the PostgreSQL connection string. Render generates `SECRET_KEY` from the Blueprint settings.
6. Wait for the deployment to finish, then open the `onrender.com` URL Render provides.

The free Render web service can sleep when idle, so the first visit may take a short time to wake. Database pricing and free-tier limits depend on the PostgreSQL provider; check its current terms before creating the database. The local SQLite accounts are not automatically copied to the hosted database, so existing users may need to create accounts again.

## Important

The app should be opened using its deployed HTTPS URL, not by double-clicking `index.html`. Keep `SECRET_KEY` and `DATABASE_URL` in the hosting provider's environment settings. Never commit them to GitHub.

## Administrator access

New accounts are learners by default. After `diyablo312@gmail.com` has registered on the deployed app, promote that existing account using the same PostgreSQL connection string configured in Render. In PowerShell, from this folder, run:

```powershell
$env:DATABASE_URL = "your-private-postgresql-connection-string"
.\.venv\Scripts\python.exe server.py promote-admin diyablo312@gmail.com
```

Keep the connection string private. The command reports `Account not found` if that email has not registered in the selected database. When the person signs in again, the Administration page will appear. Do not run this against the local SQLite database if you mean to grant admin access on the hosted site.

The Administration page shows account totals, successful sign-ins in the last 24 hours, learner email addresses, roles, lesson completion, XP, and last sign-in time. Its hosting overview shows environment type, Python runtime, database engine and connection status, app uptime, and local SQLite file size when available. It does not show passwords, password hashes, salts, database URLs, or hosting secrets. Passwords are one-way hashed and cannot be retrieved; use a password-reset flow if a user forgets one.

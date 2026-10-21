import os
import unittest

os.environ["DATABASE_URL"] = "sqlite:///:memory:"
os.environ["SECRET_KEY"] = "test-only-secret"

import server


class AccountApiTests(unittest.TestCase):
    def setUp(self):
        self.client = server.app.test_client()
        with server.app.app_context():
            server.db.drop_all()
            server.db.create_all()

    def test_register_login_and_persist_progress(self):
        response = self.client.post(
            "/api/register",
            json={"name": "Test Learner", "email": "test@example.com", "password": "test-password-123"},
        )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(self.client.get("/api/me").json["user"]["email"], "test@example.com")

        progress = {
            "completed": [0, 1],
            "xp": 20,
            "hearts": 4,
            "streak": 1,
            "lastStudyDate": "2026-10-21",
            "lastHeartDate": "2026-10-21",
            "skillLevel": "Beginner",
        }
        self.assertEqual(self.client.put("/api/progress", json=progress).status_code, 200)
        self.client.post("/api/logout", json={})
        self.assertIsNone(self.client.get("/api/me").json["user"])

        login = self.client.post(
            "/api/login", json={"email": "test@example.com", "password": "test-password-123"}
        )
        self.assertEqual(login.status_code, 200)
        self.assertEqual(self.client.get("/api/progress").json["progress"], progress)

    def test_rejects_wrong_password_and_invalid_progress(self):
        self.client.post(
            "/api/register",
            json={"name": "Test Learner", "email": "test@example.com", "password": "test-password-123"},
        )
        self.client.post("/api/logout", json={})
        wrong_password = self.client.post(
            "/api/login", json={"email": "test@example.com", "password": "wrong-password"}
        )
        self.assertEqual(wrong_password.status_code, 401)

        self.client.post(
            "/api/login", json={"email": "test@example.com", "password": "test-password-123"}
        )
        invalid_progress = self.client.put("/api/progress", json={"completed": [99]})
        self.assertEqual(invalid_progress.status_code, 400)

    def test_health_check_and_database_file_are_safe(self):
        self.assertEqual(self.client.get("/healthz").json["status"], "ok")
        self.assertEqual(self.client.get("/pypath.sqlite3").status_code, 404)

    def test_new_levels_can_save_progress(self):
        self.client.post(
            "/api/register",
            json={"name": "Test Learner", "email": "test@example.com", "password": "test-password-123"},
        )
        response = self.client.put(
            "/api/progress",
            json={"completed": list(range(20)), "xp": 600, "hearts": 5, "streak": 1, "lastHeartDate": "2026-10-21", "skillLevel": "Beginner"},
        )
        self.assertEqual(response.status_code, 200)

    def test_only_admins_can_list_learners(self):
        self.client.post(
            "/api/register",
            json={"name": "Test Learner", "email": "student@example.com", "password": "test-password-123"},
        )
        self.assertEqual(self.client.get("/api/admin/users").status_code, 403)
        self.assertTrue(server.promote_admin("student@example.com"))
        response = self.client.get("/api/admin/users")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json["users"][0]["email"], "student@example.com")
        self.assertEqual(response.json["users"][0]["role"], "admin")
        self.assertEqual(response.json["totalUsers"], 1)
        self.assertEqual(response.json["recentSignIns"], 1)
        self.assertIn("lastLoginAt", response.json["users"][0])
        self.assertNotIn("password_hash", response.json["users"][0])
        self.assertNotIn("salt", response.json["users"][0])
        system_response = self.client.get("/api/admin/system")
        self.assertEqual(system_response.status_code, 200)
        self.assertEqual(system_response.json["databaseStatus"], "Connected")
        self.assertNotIn("SECRET_KEY", system_response.json)
        self.assertNotIn("DATABASE_URL", system_response.json)

    def test_students_cannot_read_hosting_diagnostics(self):
        self.client.post(
            "/api/register",
            json={"name": "Test Learner", "email": "student@example.com", "password": "test-password-123"},
        )
        self.assertEqual(self.client.get("/api/admin/system").status_code, 403)


if __name__ == "__main__":
    unittest.main()

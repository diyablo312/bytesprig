@echo off
cd /d "%~dp0"
if not exist ".venv\Scripts\python.exe" (
  where py >nul 2>nul
  if not errorlevel 1 (
    py -3 -m venv .venv
  ) else (
    python -m venv .venv
  )
)
if errorlevel 1 goto setup_failed

".venv\Scripts\python.exe" -m pip install -r requirements.txt
if errorlevel 1 goto setup_failed

start "ByteSprig Server" /min ".venv\Scripts\python.exe" server.py
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8000"
exit /b 0

:setup_failed
echo ByteSprig could not set up. Install Python 3.11 or newer, then run this file again.
pause
exit /b 1
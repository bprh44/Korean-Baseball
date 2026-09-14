@echo off
title KBO Journey - Live Auto-Save Server
cd /d "%~dp0"
echo ======================================================
echo   Starting KBO Journey Local Server with Auto-Save...
echo ======================================================

where python >nul 2>nul
if %errorlevel% equ 0 (
    start http://localhost:8000/admin.html
    python server.py
    goto end
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    start http://localhost:8000/admin.html
    py server.py
    goto end
)

echo Python was not found in PATH. Starting native PowerShell HTTP server...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"

:end
pause

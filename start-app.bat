@echo off
title Job Tracker App Launcher
echo.
echo ================================
echo   Job Application Tracker
echo ================================
echo.
echo Starting backend server...
start "Backend Server" cmd /k "cd backend && npm run dev"
timeout /t 3 /nobreak >nul

echo Starting frontend server...
start "Frontend Server" cmd /k "cd frontend && npm start"
timeout /t 3 /nobreak >nul

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo The frontend will automatically open in your browser.
echo Press any key to exit this launcher...
pause >nul
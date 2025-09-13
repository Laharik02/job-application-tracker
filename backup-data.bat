@echo off
title Job Tracker - Data Backup
echo.
echo ================================
echo   Job Tracker Data Backup
echo ================================
echo.

if not exist backup mkdir backup

set timestamp=%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set timestamp=%timestamp: =0%

copy "backend\job_tracker.db" "backup\job_tracker_backup_%timestamp%.db" >nul

if %errorlevel%==0 (
    echo ✅ Backup successful!
    echo File saved as: backup\job_tracker_backup_%timestamp%.db
    echo.
    echo Your job application data has been safely backed up.
) else (
    echo ❌ Backup failed!
    echo Make sure the backend server is stopped and try again.
)

echo.
pause
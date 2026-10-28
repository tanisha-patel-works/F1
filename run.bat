@echo off
echo ================================================================
echo  Formula 1 Race Intelligence Dashboard - Flask Web Server
echo  Author: Tanisha Patel
echo ================================================================
cd /d "%~dp0"
if exist requirements.txt (
    echo Checking dependencies...
    pip install -r requirements.txt
)
echo Starting Flask web application...
python app.py
pause

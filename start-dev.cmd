@echo off
REM Prepend Node install folder to PATH so child processes find node
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "D:\Downloads\Portofolio\Portofolio\automate-engineer-showcase"
"C:\Program Files\nodejs\npm.cmd" run dev

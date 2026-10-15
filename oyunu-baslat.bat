@echo off
cd /d "%~dp0"
title ANKARA FIGHTER Sunucu
echo ==========================================
echo    ANKARA FIGHTER - Oyun Baslatici
echo ==========================================
echo.

rem --- Python gercekten calisiyor mu? (Microsoft Store sahte kisayolunu eler) ---
where python >nul 2>nul
if errorlevel 1 goto :try_node
python --version >nul 2>nul
if errorlevel 1 goto :try_node

echo [OK] Python bulundu.
echo.
echo Sunucu baslatiliyor: http://localhost:8130
echo Oyun birazdan tarayicida acilacak.
echo.
echo ONEMLI: Oyun acikken bu pencereyi KAPATMA.
echo Oyunu bitirince kapatabilirsin.
echo.
start "" cmd /c "timeout /t 2 /nobreak >nul & start "" http://localhost:8130"
python -m http.server 8130
goto :stopped

:try_node
where node >nul 2>nul
if errorlevel 1 goto :no_runtime

echo [OK] Node.js bulundu.
echo.
echo Sunucu baslatiliyor: http://localhost:8130
echo (Ilk calistirmada kucuk bir paket indirilir, biraz bekle.)
echo.
echo ONEMLI: Oyun acikken bu pencereyi KAPATMA.
echo.
start "" cmd /c "timeout /t 4 /nobreak >nul & start "" http://localhost:8130"
call npx --yes serve -l 8130 .
goto :stopped

:no_runtime
echo.
echo [HATA] Bilgisayarda calisan bir Python veya Node.js bulunamadi!
echo.
echo Oyunu calistirmak icin birini kurman gerekiyor:
echo.
echo   Python : https://www.python.org/downloads/
echo            DIKKAT: Kurulum ekraninda "Add python.exe to PATH"
echo            kutusunu isaretlemeyi unutma!
echo.
echo   Node   : https://nodejs.org/
echo.
pause
exit /b 1

:stopped
echo.
echo ==========================================
echo Sunucu durdu.
echo.
echo Yukarida kirmizi/hata mesaji var mi kontrol et:
echo  - "Address already in use" veya "WinError 10048" goruyorsan:
echo    baska bir baslatici penceresi zaten acik, onu kapatip tekrar dene.
echo  - Baska bir hata varsa mesajin fotografini cekip gonderebilirsin.
echo ==========================================
echo.
pause
exit /b 0

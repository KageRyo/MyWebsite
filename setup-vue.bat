@echo off
echo ================================
echo KageRyo Developer Website - Vue Setup
echo ================================
echo.

echo 正在檢查 Node.js 安裝...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 Node.js，請先安裝 Node.js
    echo 💡 請訪問 https://nodejs.org/ 下載並安裝 Node.js
    pause
    exit /b 1
)

echo ✅ Node.js 已安裝
echo.

echo 正在安裝依賴包...
npm install
if %errorlevel% neq 0 (
    echo ❌ 安裝失敗
    pause
    exit /b 1
)

echo.
echo ✅ 安裝完成！
echo.
echo 🚀 運行指令：
echo    開發模式: npm run dev
echo    建構生產: npm run build
echo    預覽生產: npm run preview
echo.
pause

# Vue 版本本地運行指南

## 🔧 環境準備

### 1. 安裝 Node.js
- 訪問 [Node.js 官網](https://nodejs.org/)
- 下載 LTS 版本（推薦）
- 安裝完成後重啟 PowerShell

### 2. 驗證安裝
```powershell
node --version
npm --version
```

## 🚀 運行步驟

### 方法一：使用自動腳本
```powershell
# 雙擊或運行
.\setup-vue.bat
```

### 方法二：手動安裝
```powershell
# 1. 安裝依賴
npm install

# 2. 啟動開發服務器
npm run dev
```

開發服務器將在 http://localhost:3000 啟動

## 📁 查看不同版本

- **原生 HTML 版本**: 直接開啟 `index.html`
- **Vue 版本**: 開啟 `index-vue.html`（需要 npm run dev）

## 🌐 部署選項

- **GitHub Pages**: 繼續使用原生 HTML 版本（無需改動）  
- **Vercel/Netlify**: 可部署 Vue 版本（需要配置建構）

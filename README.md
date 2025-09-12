# KageRyo Developer Website
我的個人網頁，在這裡探索更多新事物❤️

## 🌟 專案介紹
這是 [KageRyo Developer](https://github.com/kageryo) 的個人網站，展示個人簡介、技能、作品集和聯絡資訊。

## 🚀 技術架構

### 原生 HTML 版本（穩定版）
- **HTML5** + **CSS3** + **JavaScript (ES6+)**
- **[TocasUI](https://github.com/teacat/tocas)** - 現代化 CSS 框架
- **GitHub API** 整合 - 動態載入專案資訊
- **響應式設計** - 支援桌面與行動裝置

### Vue.js 版本（重構中）
- **Vue 3** - 使用 Composition API
- **Vue Router 4** - 單頁應用路由管理
- **Pinia** - 現代化狀態管理
- **Vite** - 快速建構工具
- **保持 TocasUI** 設計風格

## 🚀 快速開始

### 原生 HTML 版本
直接開啟 `index.html` 即可在瀏覽器中查看，或部署到任何靜態網站服務。

### Vue.js 版本

#### 前置要求
- Node.js (建議版本 16+)
- npm 或 yarn

#### 安裝與運行
```bash
# 安裝依賴
npm install

# 開發環境
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 📂 專案結構
```
├── index.html              # 首頁（原生版）
├── about.html              # 關於我頁面
├── project.html            # 作品集頁面
├── contact.html            # 聯絡頁面
├── index-vue.html          # Vue 版本入口
├── src/                    # Vue 源碼目錄
│   ├── components/         # Vue 組件
│   ├── stores/             # Pinia 狀態管理
│   ├── router/             # 路由配置
│   └── views/              # 頁面組件
├── assets/                 # 靜態資源
│   ├── css/                # 樣式文件
│   ├── js/                 # JavaScript 文件
│   └── img/                # 圖片資源
└── vite.config.js          # Vite 配置
```  

## ✨ 主要功能
- 🎨 **響應式設計** - 完美適配各種裝置
- 🌙 **深色模式** - 支援明/暗主題切換
- 📱 **行動裝置優化** - 手機端導航選單
- 🔗 **GitHub API 整合** - 動態載入開源專案
- 📧 **聯絡表單** - 直接發送郵件功能
- 🎯 **多語言介面** - 預留多語言擴展（開發中）

## 🔄 版本說明
- **HTML 版本**: 穩定運行的生產版本
- **Vue 版本**: 正在重構中，採用現代化架構
- **GitFlow**: 使用 `feature/vue-refactor` 分支進行 Vue 重構

## 如何貢獻
我們歡迎任何形式的貢獻！如果您對此專案感興趣，請遵循以下步驟：

1. Fork 此存儲庫
2. 創建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 將您的更改推送到分支 (`git push origin feature/AmazingFeature`)
5. 打開一個 Pull Request

## 聯絡我們
如果您有任何問題或建議，請隨時通過以下方式聯繫我們：

- [提交 Issue](https://github.com/KageRyo/MyWebsite/issues)
- 電子郵件: kageryo@coderyo.com

## 📝 授權條款
本專案頁面內容條款為 `CC-BY4`，可自由再製、轉發或使用，包含但不限於商業用途，唯須標明作者，而程式原始碼以 `MIT` 進行授權。

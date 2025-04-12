# marketquiz
# 網路行銷學習平台

一個專為初學者設計的網路行銷教學網站，包含課程內容、測驗系統和題庫製作教學。

## 📋 目錄

- [網站簡介](#網站簡介)
- [功能特點](#功能特點)
- [安裝與運行](#安裝與運行)
- [網站結構](#網站結構)
- [使用指南](#使用指南)
- [頁面說明](#頁面說明)
- [開發與擴展](#開發與擴展)
- [常見問題](#常見問題)
- [授權條款](#授權條款)

## 🌟 網站簡介

網路行銷學習平台是一個多功能教學網站，旨在幫助用戶學習網路行銷知識並掌握如何使用 Google Apps Script 建立網路行銷測驗系統。本站點使用 React.js 框架開發，提供直觀的用戶界面和回應式設計。

### 適用對象

- 網路行銷初學者
- 教師或培訓人員（需要製作線上測驗系統）
- 希望學習 Google Apps Script 的用戶
- 需要建立測驗題庫的行銷專業人士

## ✨ 功能特點

- **網路行銷課程** - 系統化學習 14 個網路行銷主題
- **互動式測驗** - 透過測驗鞏固所學知識
- **題庫製作教學** - 從 Excel 到 Google Forms 的完整指南
- **Google Apps Script 應用** - 自動化工作流程與測驗系統建立
- **回應式設計** - 適配各種設備尺寸，提供良好的移動端體驗

## 💻 安裝與運行

### 系統需求

- Node.js 16.0 或更高版本
- npm 7.0 或更高版本
- 現代瀏覽器（Chrome, Firefox, Safari, Edge 等）
- Google 帳號（用於 Apps Script 教學部分）

### 安裝步驟

1. **下載或克隆專案**

```bash
git clone https://github.com/yourusername/marketing-learning-platform.git
cd marketing-learning-platform
```

2. **安裝相依套件**

```bash
npm install
```

3. **啟動開發伺服器**

```bash
npm start
```

開啟瀏覽器，訪問 `http://localhost:3000` 即可看到網站。

### 建立生產版本

```bash
npm run build
```

這將在 `build` 目錄中生成優化後的網站文件，可以部署到任何靜態網站託管服務。

### 部署選項

- **GitHub Pages**
  ```bash
  npm run deploy
  ```

- **Netlify / Vercel**
  - 連接您的 GitHub 儲存庫，設置自動部署

- **Firebase Hosting**
  ```bash
  npm install -g firebase-tools
  firebase login
  firebase init
  firebase deploy
  ```

## 🔍 網站結構

本網站由四個主要 React 組件構成：

| 檔案名稱 | 描述 | 主要功能 |
|----------|------|----------|
| `website-app.js` | 主應用組件 | 頁面路由、導航、整體布局 |
| `website-homepage.js` | 首頁組件 | 介紹網站功能、學習主題預覽 |
| `website-exam-creation.js` | 題庫製作教學 | Excel 題庫製作、Google Forms 整合 |
| `website-appscript.js` | Apps Script 教學 | Google Apps Script 應用指南 |
| `website-manual.js` | 操作手冊 | 網站使用指南與常見問題解答 |

## 📖 使用指南

### 基本導航

網站提供多種方式訪問不同頁面：

1. **頂部導航欄** - 提供主要頁面的快速訪問
2. **功能區塊按鈕** - 點擊各功能區塊中的按鈕可直接訪問相應頁面
3. **頁尾快速連結** - 在頁面底部提供常用頁面連結

### 學習路徑建議

1. **開始使用**：瀏覽首頁，了解網站功能和學習目標
2. **學習網路行銷基礎**：通過課程內容學習網路行銷基本概念
3. **參與測驗**：通過互動式測驗檢驗所學知識
4. **學習題庫製作**：跟隨教學學習如何製作自己的題庫
5. **探索 Apps Script**：深入學習如何使用 Google Apps Script 自動化工作流程

## 📄 頁面說明

### 首頁

首頁提供網站概覽，包括：
- 網站主要功能介紹
- 學習主題列表
- 特色亮點說明
- 快速訪問各頁面的按鈕

### 題庫製作教學頁面

提供從 Excel 到 Google Forms 的完整教學流程：
- 題庫設計與格式化指南
- Apps Script 程式碼轉換方法
- Google Forms 整合步驟
- 進階功能與技巧

### Google Apps Script 教學頁面

從基礎到進階的 Apps Script 應用教學：
- JavaScript 基礎語法
- Google 服務 API 整合
- 表單資料處理
- 測驗系統建立
- 實用程式碼範例

### 操作手冊頁面

提供網站使用的詳細指南：
- 安裝與部署說明
- 各頁面功能介紹
- 操作流程示例
- 常見問題解答

## 🛠 開發與擴展

### 擴展課程內容

要添加新的網路行銷主題或內容：

1. 在 `website-homepage.js` 中找到主題列表數組
2. 添加新主題並創建相應的內容組件

```javascript
// 添加新主題
const topics = [
  // 現有主題
  "新主題名稱",
];
```

### 添加更多測驗題目

要擴展測驗系統的題庫：

1. 在 `website-app.js` 中找到測驗題目數據結構
2. 按照既有格式添加新的題目

```javascript
const quizData = {
  "主題": [
    {
      question: "問題內容",
      options: ["選項A", "選項B", "選項C", "選項D"],
      answer: "正確選項"
    },
    // 添加更多題目
  ]
};
```

### 自定義樣式

網站使用 Tailwind CSS 進行樣式設計，您可以在各組件中修改樣式類：

```jsx
<div className="bg-blue-100 hover:bg-blue-200 text-blue-800">
  // 修改樣式類來自定義外觀
</div>
```

## ❓ 常見問題

### 我需要懂程式設計才能使用這個網站嗎？

不需要。雖然網站包含程式設計教學內容，但作為學習者，您可以直接按照教程一步步操作，不需要事先掌握程式設計知識。

### 我可以在本地修改網站內容嗎？

是的，您可以通過編輯 React 組件文件來修改網站內容。網站使用標準的 React.js 結構，熟悉 React 的開發者可以輕鬆地添加或修改功能。

### 如果我在使用 Google Apps Script 時遇到錯誤怎麼辦？

Apps Script 教學頁面的最後部分提供了常見錯誤及其解決方案。如果遇到特定錯誤，可以參考 Google 的官方文檔或 Stack Overflow 上的相關討論。

### 網站內容會定期更新嗎？

是的，我們計劃定期更新網站內容，包括添加新的網路行銷主題、更新 Apps Script 教學以跟進最新功能，以及改進現有教學內容。

## 📄 授權條款

本專案使用 MIT 許可證，詳細資訊請參閱 LICENSE 文件。

## 🙏 鳴謝

感謝所有為本專案做出貢獻的開發者和內容創建者。

---

如有任何問題或建議，歡迎提交 Issue 或 Pull Request。

# Behavior Monitor Project - 原始專案需求

> **重要說明**: 這是專案的原始需求文檔，記錄了專案最初的構想和要求。此文檔保持不變，作為專案開發的基礎參考。

---

## 🎯 專案背景

現在你要從零開始完成一項新的專案，這會是一個有關Web的應用程式。

這一個專案的目的是為了幫助我弟弟矯正他的偏差行為，利用獎懲機制來告訴他現在的表現有沒有進步。

為了方便我以及告訴他使用，這會是一個基於網頁的應用程式。

在技術選型方面，我希望可以使用現代的web技術並且做到前後端分離。

---

## 📋 專案的基礎要求

這一個專案的基礎要求如下：

1. **必須提供一個公開網頁的使用者介面來清楚的顯示，目前我弟弟的表現分數**

2. **必須提供一個網頁的管理介面方便我針對系統進行設定**

3. **必須提供一個API介面，讓我可以透過API來更新我弟弟的表現分數**

4. **必須提供一個使用者認證系統，確保只有我可以更新弟弟的表現分數**

5. **必須提供一個紀錄系統，可以紀錄弟弟每一次表現分數的變化以及原因**

6. **必須提供一個通知系統，可以在我弟弟表現分數達到某個門檻時，通知我**

7. **必須提供一個設定系統，可以讓我設定弟弟表現分數的初始值，以及每一次表現分數的變化幅度**

8. **必須提供一個設定系統，可以讓我設定每一次表現分數的變化幅度**

9. **必須提供一個設定系統，可以讓我設定每一次表現分數的變化幅度**

10. **表現分數有正有負，可以用來獎勵或懲罰弟弟**

11. **必須提供一個簡單的使用者介面，讓我可以輕鬆地查看弟弟的表現分數歷史紀錄**

12. **必須提供一個簡單的使用者介面，讓我可以輕鬆地查看弟弟的表現分數統計資訊**

13. **必須提供一個簡單的使用者介面，讓我可以輕鬆地查看弟弟的表現分數趨勢圖**

14. **如果今天沒有犯錯，那麼弟弟的分數會自動增加，而增加的幅度會因為我的設定而有所不同，我可以在後端設定每天增加的幅度**

15. **公開頁面必須一頁即可檢視所有功能，管理界面也是一頁即可設定與檢視所有功能**

16. **不需繁瑣的登入流程，管理介面只需要一個密碼即可登入**

17. **必須提供針對分數變化的趨勢圖、分析圖、各種統計圖表**

---

## 🛠 專案的技術選型

1. **這個專案必須要可以簡單部署在github pages上面，並且在公開的repo自動進行cicd，資料的持久化可以使用firebase的database，但是保留遷移資料庫的可能性。**

2. **前端可以使用React.js，並且使用TypeScript來進行開發，這樣可以確保程式碼的可讀性和可維護性。**

3. **後端不限制語言，但是必須適合我的需求，並且可以簡單部署**

4. **本專案是我的個人專案，所以不需要考慮到商業化的需求，但是必須考慮到未來可能的擴展性。**

5. **前端和後端必須要有清晰的API介面，並且可以輕鬆地進行測試。**

6. **我是一個有經驗的軟體工程師，所以不需要考慮到新手的學習曲線，但是必須考慮到程式碼的可讀性和可維護性。**

7. **js ts與現代的前端界面是我不熟的地方，這是我的學習專案，所有本專案的所有程式碼所有位置必須要有清楚和有邏輯的註解（不可anti-pattern），還有文件供我使用**

8. **本專案的所有程式碼必須要有清楚的版本控制，並且可以輕鬆地進行回滾。**

9. **所有的程式碼必須要有清楚的註解，並且可以輕鬆地進行維護。**

10. **要有swagger文件，方便我了解API的使用方式**

11. **data Model設計必須要考慮到未來可能的擴展性，並且能夠輕鬆地進行資料庫遷移**

12. **使用第三方的UI元件庫是可以的，但是要好看漂亮簡單就好，且要在文件中清楚標示**

---

## 🔧 專案的config資料

### Firebase Database Config
```javascript
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsB-bA-FEvi9hrap1yYR6NKcVtf29gyCE",
    authDomain: "behaviormonitor-36a53.firebaseapp.com",
    projectId: "behaviormonitor-36a53",
    storageBucket: "behaviormonitor-36a53.firebasestorage.app",
    messagingSenderId: "151222759826",
    appId: "1:151222759826:web:bbb482def199e8ce92d14b",
    measurementId: "G-TGY6EGNK2M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```

---

## 💻 開發環境

可能會在 M4 Mac mini 上進行開發或是遠端在 Arch Linux 上進行開發。

---

## 📝 其他

如果有任何問題或是改善的空間或是比較好的做法，請隨時提出來，我會根據你的建議進行調整。

---

## 📊 需求實現狀況

> **注意**: 以下內容為後續添加，用於追蹤原始需求的實現狀況

### ✅ 已完成的需求
- [x] 1. 公開網頁顯示表現分數 ✅
- [x] 2. 網頁管理介面 ✅
- [x] 3. API介面更新分數 ✅
- [x] 4. 使用者認證系統 ✅
- [x] 5. 紀錄系統 ✅
- [x] 6. 通知系統基礎 ✅
- [x] 7-9. 設定系統 ✅
- [x] 10. 正負分數獎懲機制 ✅
- [x] 11. 歷史紀錄查看 ✅
- [x] 12. 統計資訊查看 ✅
- [x] 13. 趨勢圖顯示 ✅
- [x] 14. 自動每日分數增加 ✅
- [x] 15. 單頁面設計 ✅
- [x] 16. 簡單密碼登入 ✅
- [x] 17. 各種統計圖表 ✅

### 🚀 技術選型實現
- [x] GitHub Pages 部署 ✅
- [x] CI/CD 自動化 ✅
- [x] Firebase Database ✅
- [x] React.js + TypeScript ✅
- [x] 清晰的API介面 ✅
- [x] 詳細的程式碼註解 ✅
- [x] 完整的文檔 ✅
- [x] 版本控制 ✅
- [x] 可擴展的資料模型 ✅
- [x] 第三方UI元件庫 (Ant Design) ✅

### 📈 超越原始需求的功能
- ✅ Lazy Update 自動補齊機制
- ✅ 無限制的分數操作
- ✅ 豐富的統計圖表 (熱力圖、趨勢分析等)
- ✅ 響應式設計
- ✅ 現代化的開發工具鏈
- ✅ 完整的錯誤處理
- ✅ 性能優化

---

*原始需求文檔創建日期：專案開始時*  
*本文檔最後更新：2024年1月*

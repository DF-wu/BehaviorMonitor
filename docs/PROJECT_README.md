# Behavior Monitor - 行為監控系統

一個用於監控和管理行為表現的 Web 應用程式，使用現代化的技術棧構建。

## 🎯 專案目標

這個專案旨在幫助管理和追蹤個人行為表現，通過獎懲機制來鼓勵積極行為和改正不良行為。

## ✨ 主要功能

### 公開頁面
- 📊 **即時分數顯示**：大字體顯示目前表現分數
- 📈 **動態背景**：根據分數高低變化背景顏色
- 📝 **歷史記錄**：顯示所有獎懲記錄和原因
- 🕒 **最後更新時間**：顯示分數最後更新的時間

### 管理介面
- 🔐 **簡單認證**：使用密碼進入管理模式
- ⚡ **快速操作**：預設的獎勵和懲罰按鈕
- 🎨 **自定義操作**：靈活設定分數和原因
- 📊 **統計圖表**：趨勢圖、分佈圖、每日變化圖
- ⚙️ **系統設定**：管理初始分數、每日增加、通知門檻等

## 🛠 技術棧

- **前端框架**：React 19 + TypeScript
- **建構工具**：Vite 7
- **UI 庫**：Ant Design 5
- **圖表庫**：@ant-design/charts
- **資料庫**：Firebase Firestore
- **後端服務**：Firebase Functions
- **部署平台**：GitHub Pages
- **狀態管理**：React Context + useReducer
- **日期處理**：Day.js

## 🚀 快速開始

### 環境要求
- Node.js 18+
- npm 或 yarn

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 建構生產版本
```bash
npm run build
```

### 預覽生產版本
```bash
npm run preview
```

## 📁 專案結構

```
src/
├── components/          # React 組件
│   ├── admin/          # 管理介面組件
│   ├── PublicView.tsx  # 公開頁面
│   └── AdminView.tsx   # 管理介面
├── context/            # React Context
├── services/           # 服務層（Firebase 操作）
├── types/              # TypeScript 類型定義
├── config/             # 配置文件
└── App.tsx            # 主應用程式組件

functions/              # Firebase Functions
├── src/
│   └── index.ts       # Cloud Functions
└── package.json

firebase.json          # Firebase 配置
firestore.rules       # Firestore 安全規則
```

## 🔧 配置說明

### Firebase 設定
1. 在 Firebase Console 創建專案
2. 啟用 Firestore 資料庫
3. 啟用 Functions（可選）
4. 更新 `src/config/firebase.ts` 中的配置

### 預設設定
- **初始分數**：100 分
- **每日自動增加**：1 分
- **通知門檻**：50 分
- **管理員密碼**：admin123

## 📊 資料結構

### 分數記錄 (scoreRecords)
```typescript
{
  id: string;
  score: number;        // 分數變動量
  reason: string;       // 變動原因
  timestamp: Date;      // 時間戳
  type: 'reward' | 'punishment';
}
```

### 系統設定 (settings)
```typescript
{
  id: string;
  initialScore: number;          // 初始分數
  dailyIncrement: number;        // 每日自動增加
  notificationThreshold: number; // 通知門檻
  adminPassword: string;         // 管理員密碼
}
```

## 🚀 部署

### GitHub Pages 部署
1. 建構專案：`npm run build`
2. 將 `dist` 目錄內容推送到 `gh-pages` 分支
3. 在 GitHub 設定中啟用 Pages

### Firebase Hosting 部署
```bash
firebase deploy
```

## 📝 開發注意事項

- 所有組件都有詳細的 TypeScript 類型定義
- 使用 React Context 進行狀態管理
- Firebase 操作都封裝在服務層中
- 響應式設計，支援手機和桌面端
- 完整的錯誤處理和載入狀態

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License

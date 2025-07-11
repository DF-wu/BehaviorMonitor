# Behavior Monitor - 行為監控系統

<div align="center">

![Behavior Monitor](https://img.shields.io/badge/Behavior-Monitor-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-222?style=for-the-badge&logo=github)

**一個現代化的行為追蹤和管理系統**

[🚀 Live Demo](https://DF-wu.github.io/BehaviorMonitor/) | [📖 Documentation](#-文檔導覽) | [🛠 Development](#-開發指南)

</div>

---

## 🎯 專案概述

Behavior Monitor 是一個全功能的行為監控和管理系統，使用現代化技術棧構建。通過獎懲機制來鼓勵積極行為和改正不良行為，提供實時分數追蹤、統計分析和自動化管理功能。

### ✨ 核心功能

- 📊 **實時分數顯示** - 大字體顯示目前表現分數，動態背景色彩
- 🔐 **管理員介面** - 密碼保護的管理面板，完整的分數管理功能
- 📈 **統計分析** - 多種圖表類型，靈活的時間範圍分析
- 📝 **歷史記錄** - 完整的操作日誌和原因追蹤
- ⚡ **自動化功能** - 每日自動增加分數的排程任務
- 🔔 **通知系統** - 門檻設定和通知框架
- 📱 **響應式設計** - 支援所有設備尺寸

### 🛠 技術棧

- **Frontend**: React 19 + TypeScript + Vite
- **UI Library**: Ant Design 5 + @ant-design/charts
- **Backend**: Firebase Firestore + Cloud Functions
- **Deployment**: GitHub Pages + GitHub Actions CI/CD
- **State Management**: React Context + useReducer

---

## 🚀 快速開始

### 環境要求
- Node.js 18+
- npm 或 yarn
- Git

### 安裝和運行
```bash
# 克隆專案
git clone https://github.com/DF-wu/BehaviorMonitor.git
cd BehaviorMonitor

# 安裝依賴
npm install

# 開發模式
npm run dev

# 生產構建
npm run build

# 預覽生產版本
npm run preview
```

### 部署
```bash
# 一鍵部署到 GitHub Pages
npm run deploy:gh-pages

# 或使用自定義腳本
./deploy.sh
```

---

## 📖 文檔導覽

### 📋 主要文檔

| 文檔 | 描述 | 適用對象 |
|------|------|----------|
| [🏗 開發指南](./docs/DEVELOPMENT_GUIDE.md) | 詳細的開發環境設置和架構說明 | 開發者 |
| [🚀 部署指南](./docs/DEPLOYMENT_GUIDE.md) | 完整的部署流程和配置說明 | DevOps |
| [📡 API 文檔](./docs/API_DOCUMENTATION.md) | Firebase Functions API 參考 | 開發者 |
| [🔧 故障排除](./docs/TROUBLESHOOTING.md) | 常見問題和解決方案 | 所有用戶 |

### 📚 專案文檔

| 文檔 | 描述 |
|------|------|
| [📊 專案總結](./docs/PROJECT_SUMMARY.md) | 專案完成狀況和技術總結 |
| [✅ 完成檢查清單](./docs/FINAL_CHECKLIST.md) | 功能完成度驗證清單 |
| [🎨 UI/UX 設計](./docs/UI_UX_Documentation.md) | 使用者介面設計文檔 |
| [📝 專案描述](./docs/projectDescription.md) | 原始專案需求描述 |

### 🔧 技術文檔

| 文檔 | 描述 |
|------|------|
| [⚙️ GitHub Actions 設置](./docs/GITHUB_AUTO_BUILD_SETUP.md) | 自動構建和部署設置 |
| [🐛 Build 修復報告](./docs/GITHUB_BUILD_FIX.md) | GitHub Actions 問題修復記錄 |
| [🧪 測試指南](./test-app.sh) | 自動化測試腳本 |
| [📊 部署檢查](./check-deployment.sh) | 部署狀態檢查工具 |

---

## 🏗 開發指南

### 專案結構
```
BehaviorMonitor/
├── 📁 src/                    # 源代碼
│   ├── components/            # React 組件
│   ├── context/              # 狀態管理
│   ├── services/             # Firebase 服務
│   ├── types/                # TypeScript 類型
│   └── config/               # 配置文件
├── 📁 functions/             # Firebase Functions
├── 📁 docs/                  # 文檔目錄
├── 📁 public/                # 靜態資源
└── 📁 .github/workflows/     # CI/CD 配置
```

### 開發命令
```bash
npm run dev          # 開發服務器
npm run build        # 生產構建
npm run lint         # 代碼檢查
npm run preview      # 預覽構建結果
npm run deploy       # 部署到 GitHub Pages
```

### 測試和驗證
```bash
./test-app.sh        # 運行完整測試套件
./check-deployment.sh # 檢查部署狀態
```

---

## 🔧 配置說明

### Firebase 設置
1. 創建 Firebase 專案
2. 啟用 Firestore 和 Functions
3. 更新 `src/config/firebase.ts` 配置
4. 部署安全規則：`firebase deploy --only firestore:rules`

### GitHub Pages 設置
1. 前往 Repository Settings → Pages
2. Source 選擇 "GitHub Actions"
3. 推送代碼自動觸發部署

### 環境變數（可選）
```bash
# .env.production
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_PROJECT_ID=your-project-id
```

---

## 📊 功能展示

### 公開介面
- 🎨 動態背景色彩（綠色：優秀，藍色：普通，紅色：需改進）
- 📊 大字體分數顯示
- 📝 歷史記錄列表
- 🔘 管理員入口浮動按鈕

### 管理介面
- 🏠 儀表板概覽
- ⚡ 快速操作面板
- 📈 統計圖表分析
- ⚙️ 系統設定管理

### 統計功能
- 📊 趨勢分析圖表
- 🥧 獎懲分佈圖
- 📅 每日變化圖
- 🔢 關鍵指標統計

---

## 🤝 貢獻指南

### 開發流程
1. Fork 專案
2. 創建功能分支：`git checkout -b feature/new-feature`
3. 提交變更：`git commit -m 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 創建 Pull Request

### 代碼規範
- 使用 TypeScript 進行類型檢查
- 遵循 ESLint 規則
- 添加適當的註解和文檔
- 確保所有測試通過

---

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 文件

---

## 🆘 支援

### 獲取幫助
- 📖 查看 [文檔](#-文檔導覽)
- 🐛 提交 [Issue](https://github.com/DF-wu/BehaviorMonitor/issues)
- 💬 參與 [Discussions](https://github.com/DF-wu/BehaviorMonitor/discussions)

### 聯繫方式
- 📧 Email: [專案維護者](mailto:your-email@example.com)
- 🌐 Website: [專案主頁](https://DF-wu.github.io/BehaviorMonitor/)

---

<div align="center">

**⭐ 如果這個專案對您有幫助，請給我們一個 Star！**

Made with ❤️ by [DF-wu](https://github.com/DF-wu)

</div>

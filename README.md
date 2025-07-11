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
- ⚡ **自動化功能** - 每日自動增加分數的排程任務（Lazy Update）
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
./docs/scripts/deploy.sh
```

---

## 📖 文檔導覽

| 文檔                                          | 描述                                  | 適用對象 |
| --------------------------------------------- | ------------------------------------- | -------- |
| [🏗 開發指南](./docs/DEVELOPMENT.md)           | 開發環境、架構說明、API文檔、故障排除 | 開發者   |
| [🚀 部署指南](./docs/DEPLOYMENT.md)            | 完整的部署流程和配置說明              | DevOps   |
| [📊 專案信息](./docs/PROJECT.md)               | 專案完成狀況、技術總結                | 所有用戶 |
| [📋 原始需求](./docs/ORIGINAL_REQUIREMENTS.md) | 專案最初需求和背景描述                | 所有用戶 |
| [🔧 技術升級](./docs/TECHNICAL_UPGRADES.md)    | Node.js升級、pnpm遷移、CI/CD改進      | 開發者   |
| [🛠 修復記錄](./docs/FIXES.md)                 | 所有問題修復記錄和解決方案            | 開發者   |
| [🚀 功能特色](./docs/FEATURES.md)              | Lazy Update、統計圖表等特色功能       | 所有用戶 |
| [🎨 UI 設計指南](./docs/UI_GUIDE.md)           | 使用者介面設計文檔                    | 設計師   |

### 🛠 工具和腳本

| 工具                                                      | 描述                    |
| --------------------------------------------------------- | ----------------------- |
| [🔧 管理員密碼調試工具](./tools/debug-admin-password.html) | 密碼重置和調試工具      |
| [🚀 部署腳本](./docs/scripts/deploy.sh)                    | 一鍵部署到 GitHub Pages |
| [🧪 測試腳本](./docs/scripts/test-app.sh)                  | 自動化測試套件          |
| [📊 部署檢查](./docs/scripts/check-deployment.sh)          | 部署狀態檢查工具        |

---

## 🏗 專案結構

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
│   ├── fixes/                # 修復記錄
│   ├── features/             # 功能文檔
│   ├── guides/               # 指南文檔
│   └── scripts/              # 腳本文件
├── 📁 tools/                 # 工具文件
├── 📁 public/                # 靜態資源
└── 📁 .github/workflows/     # CI/CD 配置
```

---

## 🔧 開發指南

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
./docs/scripts/test-app.sh        # 運行完整測試套件
./docs/scripts/check-deployment.sh # 檢查部署狀態
```

---

## 📊 功能展示

### 公開介面
- 🎨 動態背景色彩（綠色：優秀，藍色：普通，紅色：需改進）
- 📊 大字體分數顯示
- 📈 統計圖表分析（趨勢、每日統計、熱力圖、統計摘要）
- 📝 歷史記錄列表
- 🔘 管理員入口浮動按鈕

### 管理介面
- 🏠 儀表板概覽
- ⚡ 快速操作面板（無分數限制）
- 📈 統計圖表分析
- ⚙️ 系統設定管理

### 特色功能
- 🔄 **Lazy Update**: 自動補齊錯過的每日分數
- 🚫 **無限制操作**: 移除分數和訊息長度限制
- 📊 **豐富圖表**: 趨勢分析、每日統計、活動熱力圖
- 🎯 **智能管理**: 密碼保護、操作記錄、自動化功能

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
- 🌐 Website: [專案主頁](https://DF-wu.github.io/BehaviorMonitor/)

---

<div align="center">

**⭐ 如果這個專案對您有幫助，請給我們一個 Star！**

Made with ❤️ by [DF-wu](https://github.com/DF-wu)

</div>

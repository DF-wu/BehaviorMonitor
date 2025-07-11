# 開發指南

## 🎯 概述

Behavior Monitor 是一個現代化的行為監控和管理系統，使用 React + TypeScript + Firebase 技術棧構建。

---

## 🛠 開發環境設置

### 系統要求
- **Node.js**: v24.0.0 或更高
- **pnpm**: v8.0.0 或更高
- **Git**: 最新版本

### 快速開始
```bash
# 克隆專案
git clone https://github.com/DF-wu/BehaviorMonitor.git
cd BehaviorMonitor

# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm run dev

# 構建生產版本
pnpm run build
```

### Firebase 配置
1. 在 Firebase Console 創建新專案
2. 啟用 Firestore Database 和 Analytics
3. 複製配置到 `src/config/firebase.ts`
4. 設置 Firestore 安全規則

---

## 🏗 專案架構

### 技術棧
- **Frontend**: React 19 + TypeScript + Vite
- **UI Library**: Ant Design 5 + @ant-design/charts
- **Backend**: Firebase Firestore + Cloud Functions
- **Deployment**: GitHub Pages + GitHub Actions CI/CD
- **Package Manager**: pnpm

### 目錄結構
```
src/
├── components/          # React 組件
│   ├── admin/          # 管理員組件
│   ├── AdminView.tsx   # 管理員主頁面
│   ├── PublicView.tsx  # 公開主頁面
│   └── AdminLoginModal.tsx
├── context/            # React Context
├── services/           # Firebase 服務
├── types/              # TypeScript 類型定義
├── hooks/              # 自定義 Hooks
└── config/             # 配置文件
```

### 核心組件
- **PublicView**: 公開介面，顯示分數和統計
- **AdminView**: 管理員介面，分數管理和設定
- **QuickActions**: 快速操作面板
- **StatisticsPanel**: 統計圖表面板

---

## 📡 API 文檔

### Firebase Functions

#### 1. 每日分數增加 (dailyScoreIncrement)
**觸發**: 每日 UTC 00:00
**功能**: 自動為所有用戶增加每日分數

```javascript
// 自動觸發，無需手動調用
// 使用 Lazy Update 模式，用戶訪問時自動補齊
```

#### 2. Firestore 數據結構

**Settings 集合**:
```typescript
interface Settings {
  adminPassword: string;      // 管理員密碼
  initialScore: number;       // 初始分數 (預設: 100)
  dailyIncrement: number;     // 每日增加分數 (預設: 1)
  notificationThreshold: number; // 通知門檻 (預設: 50)
}
```

**ScoreRecords 集合**:
```typescript
interface ScoreRecord {
  id: string;
  timestamp: Timestamp;       // 操作時間
  score: number;             // 分數變化
  reason: string;            // 操作原因
  operationType: 'reward' | 'penalty'; // 操作類型
  currentTotal: number;      // 操作後總分
}
```

---

## 🐛 故障排除

### 常見問題

#### 1. 構建失敗
```bash
# 清理並重新安裝依賴
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 檢查 Node.js 版本
node --version  # 應該是 v24.x.x
```

#### 2. Firebase 連接問題
- 檢查 `src/config/firebase.ts` 配置
- 確認 Firebase 專案設定正確
- 檢查網路連接和防火牆設定

#### 3. 管理員登入問題
- 預設密碼: `admin123`
- 使用調試工具: `tools/debug-admin-password.html`
- 檢查 Firestore 中的 settings 文檔

#### 4. pnpm 相關問題
```bash
# 檢查 pnpm 版本
pnpm --version

# 清理緩存
pnpm store prune

# 重新安裝
pnpm install --frozen-lockfile
```

### 開發工具
- **ESLint**: 代碼品質檢查
- **TypeScript**: 類型檢查
- **Vite**: 快速開發和構建
- **React DevTools**: React 組件調試

### 性能優化
- 使用 React.memo 優化組件渲染
- 實現虛擬滾動處理大量數據
- 使用 Vite 的代碼分割功能
- 優化 Firebase 查詢和索引

---

## 🧪 測試

### 運行測試
```bash
# 運行完整測試套件
./docs/scripts/test-app.sh

# 檢查部署狀態
./docs/scripts/check-deployment.sh
```

### 測試策略
- **單元測試**: 核心邏輯和工具函數
- **集成測試**: Firebase 服務集成
- **E2E 測試**: 關鍵用戶流程
- **性能測試**: 大量數據處理

---

## 📝 開發規範

### 代碼風格
- 使用 TypeScript 進行類型檢查
- 遵循 ESLint 規則
- 使用 Prettier 格式化代碼
- 添加適當的註解和文檔

### Git 工作流程
1. 從 main 分支創建功能分支
2. 開發並測試功能
3. 提交清晰的 commit 訊息
4. 創建 Pull Request
5. 代碼審查後合併

### 命名規範
- **組件**: PascalCase (例: `AdminView`)
- **文件**: camelCase (例: `useApp.ts`)
- **常量**: UPPER_SNAKE_CASE (例: `DEFAULT_SCORE`)
- **函數**: camelCase (例: `updateScore`)

---

## 🔗 相關資源

- [部署指南](./DEPLOYMENT.md)
- [專案信息](./PROJECT.md)
- [技術升級記錄](./TECHNICAL_UPGRADES.md)
- [GitHub Repository](https://github.com/DF-wu/BehaviorMonitor)
- [Live Demo](https://DF-wu.github.io/BehaviorMonitor/)

---

*最後更新：2024年1月*

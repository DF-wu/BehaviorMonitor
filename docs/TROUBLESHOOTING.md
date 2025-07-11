# Behavior Monitor - 故障排除指南

## 🔧 常見問題和解決方案

### 🏗 構建問題

#### 問題 1: npm install 失敗
**症狀**: 依賴安裝失敗，出現權限或網路錯誤

**解決方案**:
```bash
# 清除 npm 緩存
npm cache clean --force

# 刪除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安裝
npm install

# 如果仍有問題，嘗試使用 yarn
npm install -g yarn
yarn install
```

#### 問題 2: TypeScript 編譯錯誤
**症狀**: `tsc -b` 失敗，出現類型錯誤

**解決方案**:
```bash
# 檢查 TypeScript 版本
npx tsc --version

# 重新生成類型聲明
rm -rf dist
npm run build

# 檢查具體錯誤
npx tsc --noEmit
```

#### 問題 3: Vite 構建失敗
**症狀**: `vite build` 失敗

**解決方案**:
```bash
# 檢查 Vite 配置
cat vite.config.ts

# 清除 Vite 緩存
rm -rf node_modules/.vite

# 重新構建
npm run build
```

### 🔥 Firebase 問題

#### 問題 4: Firebase 連接失敗
**症狀**: 應用程式無法連接到 Firebase

**解決方案**:
1. 檢查 Firebase 配置：
```typescript
// src/config/firebase.ts
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ...
};
```

2. 驗證 Firebase 專案狀態：
   - 前往 [Firebase Console](https://console.firebase.google.com/)
   - 確認專案處於活躍狀態
   - 檢查 Firestore 是否已啟用

#### 問題 5: Firestore 權限錯誤
**症狀**: `FirebaseError: Missing or insufficient permissions`

**解決方案**:
1. 檢查 Firestore 安全規則：
```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // 開發環境
    }
  }
}
```

2. 部署安全規則：
```bash
firebase deploy --only firestore:rules
```

#### 問題 6: Cloud Functions 部署失敗
**症狀**: Functions 部署錯誤

**解決方案**:
```bash
# 檢查 Firebase CLI 版本
firebase --version

# 登入 Firebase
firebase login

# 初始化 Functions（如果需要）
firebase init functions

# 部署 Functions
cd functions
npm install
cd ..
firebase deploy --only functions
```

### 🚀 部署問題

#### 問題 7: GitHub Actions 構建失敗
**症狀**: GitHub Actions 工作流程失敗

**解決方案**:
1. 檢查 GitHub Actions 日誌
2. 常見修復：
```yaml
# .github/workflows/deploy.yml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'

- name: Install dependencies
  run: npm ci

- name: Build
  run: npm run build
```

#### 問題 8: GitHub Pages 404 錯誤
**症狀**: 部署後訪問頁面顯示 404

**解決方案**:
1. 檢查 GitHub Pages 設置：
   - Repository Settings → Pages
   - Source: "GitHub Actions"

2. 檢查 base URL 配置：
```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/BehaviorMonitor/' : '/',
});
```

3. 確認 404.html 文件存在：
```bash
ls public/404.html
```

#### 問題 9: 部署後功能異常
**症狀**: 本地正常，部署後功能不工作

**解決方案**:
1. 檢查瀏覽器控制台錯誤
2. 檢查網路請求是否成功
3. 驗證 Firebase 配置在生產環境中是否正確

### 🖥 開發環境問題

#### 問題 10: 開發服務器啟動失敗
**症狀**: `npm run dev` 失敗

**解決方案**:
```bash
# 檢查端口是否被占用
lsof -i :5173

# 殺死占用端口的進程
kill -9 <PID>

# 或使用不同端口
npm run dev -- --port 3000
```

#### 問題 11: 熱重載不工作
**症狀**: 修改代碼後頁面不自動刷新

**解決方案**:
1. 檢查 Vite 配置：
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: true,
    port: 5173,
  },
});
```

2. 清除瀏覽器緩存
3. 重啟開發服務器

#### 問題 12: ESLint 錯誤
**症狀**: `npm run lint` 報告錯誤

**解決方案**:
```bash
# 自動修復可修復的錯誤
npm run lint -- --fix

# 檢查具體錯誤
npx eslint src/ --ext .ts,.tsx

# 如果是配置問題，檢查 eslint.config.js
```

### 📱 功能問題

#### 問題 13: 統計圖表不顯示
**症狀**: 統計頁面圖表空白

**解決方案**:
1. 檢查數據是否正確載入：
```javascript
// 在瀏覽器控制台檢查
console.log('Score records:', scoreRecords);
```

2. 檢查圖表庫是否正確載入：
```bash
npm list @ant-design/charts
```

3. 檢查控制台是否有 JavaScript 錯誤

#### 問題 14: 管理員登入失敗
**症狀**: 輸入正確密碼仍無法登入

**解決方案**:
1. 檢查 Firestore 中的設定文檔：
```javascript
// 在瀏覽器控制台執行
import { db } from './src/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const settingsDoc = await getDoc(doc(db, 'settings', 'main'));
console.log(settingsDoc.data());
```

2. 重置管理員密碼：
```javascript
// 在管理介面的設定頁面更新密碼
```

#### 問題 15: 分數更新不同步
**症狀**: 分數變更後其他用戶看不到更新

**解決方案**:
1. 檢查 Firestore 實時監聽：
```typescript
// 確認 onSnapshot 正確設置
const unsubscribe = onSnapshot(collection(db, 'scoreRecords'), (snapshot) => {
  // 處理更新
});
```

2. 檢查網路連接
3. 檢查 Firebase 專案配額

### 🔍 調試技巧

#### 啟用調試模式
```javascript
// 在瀏覽器控制台
localStorage.setItem('debug', 'true');
```

#### 檢查 Firebase 連接
```javascript
// 測試 Firestore 連接
import { connectFirestoreEmulator } from 'firebase/firestore';
// 檢查是否連接到正確的 Firebase 專案
```

#### 網路請求調試
1. 打開瀏覽器開發者工具
2. 前往 Network 標籤
3. 檢查 Firebase API 請求是否成功

### 📞 獲取幫助

如果以上解決方案都無法解決問題：

1. **檢查日誌**：
   - 瀏覽器控制台
   - GitHub Actions 日誌
   - Firebase Console 日誌

2. **提交 Issue**：
   - 前往 [GitHub Issues](https://github.com/DF-wu/BehaviorMonitor/issues)
   - 提供詳細的錯誤信息和重現步驟

3. **查看文檔**：
   - [開發指南](./DEVELOPMENT_GUIDE.md)
   - [部署指南](./DEPLOYMENT_GUIDE.md)
   - [API 文檔](./API_DOCUMENTATION.md)

### 🛠 有用的命令

```bash
# 完整重置
rm -rf node_modules package-lock.json dist
npm install
npm run build

# 檢查專案狀態
./test-app.sh

# 檢查部署狀態
./check-deployment.sh

# Firebase 相關
firebase login
firebase projects:list
firebase use <project-id>

# Git 相關
git status
git log --oneline -5
git remote -v
```

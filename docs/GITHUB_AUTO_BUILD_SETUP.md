# GitHub 自動構建和部署設置指南

## 🚀 概述

這個指南將幫助您設置 GitHub 自動構建和部署，讓您每次推送代碼到 main 分支時，自動構建並部署到 GitHub Pages。

## 📋 前置條件

- GitHub 帳戶和倉庫
- 本地 Git 配置完成
- 專案代碼已推送到 GitHub

## 🔧 步驟 1：啟用 GitHub Pages

### 1.1 進入倉庫設置
1. 打開您的 GitHub 倉庫頁面
2. 點擊 **Settings** 標籤
3. 在左側菜單中找到 **Pages**

### 1.2 配置 Pages 設置
1. 在 **Source** 部分，選擇 **GitHub Actions**
2. 這將啟用通過 Actions 進行部署的功能

![GitHub Pages Settings](https://docs.github.com/assets/cb-20891/images/help/pages/publishing-source-github-actions.png)

## 🔧 步驟 2：啟用 GitHub Actions

### 2.1 檢查 Actions 權限
1. 在倉庫設置中，點擊 **Actions** → **General**
2. 確保 **Actions permissions** 設置為：
   - "Allow all actions and reusable workflows"
   - 或 "Allow [organization] actions and reusable workflows"

### 2.2 設置 Workflow 權限
在同一頁面的 **Workflow permissions** 部分：
1. 選擇 **Read and write permissions**
2. 勾選 **Allow GitHub Actions to create and approve pull requests**

## 🔧 步驟 3：推送代碼觸發自動構建

### 3.1 提交並推送代碼
```bash
# 確保所有變更都已提交
git add .
git commit -m "Enable GitHub Actions auto-build and deploy"

# 推送到 main 分支觸發自動構建
git push origin main
```

### 3.2 監控構建過程
1. 推送後，前往倉庫的 **Actions** 標籤
2. 您應該看到一個名為 "Deploy to GitHub Pages" 的工作流程正在運行
3. 點擊工作流程查看詳細的構建日誌

## 📊 工作流程說明

### 自動觸發條件
- **Push to main branch**: 每次推送到 main 分支時自動觸發
- **Manual dispatch**: 可以在 Actions 頁面手動觸發

### 構建步驟
1. **Checkout**: 檢出代碼
2. **Setup Node.js**: 設置 Node.js 18 環境
3. **Install dependencies**: 安裝 npm 依賴
4. **Run ESLint**: 代碼質量檢查
5. **Build application**: 構建生產版本
6. **Deploy to Pages**: 部署到 GitHub Pages

### 部署結果
- 成功後，應用程式將可在以下地址訪問：
  ```
  https://[your-username].github.io/BehaviorMonitor/
  ```

## 🔍 故障排除

### 常見問題 1：Actions 權限不足
**錯誤**: `Error: Resource not accessible by integration`

**解決方案**:
1. 檢查倉庫設置 → Actions → General
2. 確保 Workflow permissions 設置為 "Read and write permissions"

### 常見問題 2：Pages 部署失敗
**錯誤**: `Error: No uploaded artifact was found!`

**解決方案**:
1. 檢查構建步驟是否成功完成
2. 確保 `dist` 目錄被正確生成
3. 檢查 `vite.config.ts` 中的 base 路徑設置

### 常見問題 3：構建失敗
**錯誤**: Build 步驟失敗

**解決方案**:
1. 檢查本地是否能成功運行 `npm run build`
2. 確保所有依賴都在 `package.json` 中正確聲明
3. 檢查 TypeScript 錯誤和 ESLint 警告

## 🔄 手動觸發部署

如果需要手動觸發部署：

1. 前往倉庫的 **Actions** 標籤
2. 點擊 **Deploy to GitHub Pages** 工作流程
3. 點擊 **Run workflow** 按鈕
4. 選擇分支（通常是 main）
5. 點擊 **Run workflow**

## 📈 監控和日誌

### 查看構建狀態
- 在倉庫主頁可以看到最新 commit 旁邊的狀態圖標
- ✅ 綠色勾號：構建成功
- ❌ 紅色叉號：構建失敗
- 🟡 黃色圓點：構建進行中

### 查看詳細日誌
1. 點擊 **Actions** 標籤
2. 選擇特定的工作流程運行
3. 點擊各個步驟查看詳細日誌

## 🎯 最佳實踐

### 1. 分支保護
建議設置分支保護規則：
```bash
# 在 Settings → Branches 中設置
- Require status checks to pass before merging
- Require branches to be up to date before merging
```

### 2. 環境變數
如果需要設置環境變數：
```bash
# 在 Settings → Secrets and variables → Actions 中添加
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_PROJECT_ID=your-project-id
```

### 3. 緩存優化
工作流程已經配置了 npm 緩存，可以加快構建速度：
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'  # 這行啟用了緩存
```

## 🔔 通知設置

### Slack 通知（可選）
如果想要 Slack 通知，可以添加以下步驟：

```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    channel: '#deployments'
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Email 通知
GitHub 會自動發送 email 通知給：
- 觸發工作流程的用戶
- 倉庫的 watch 用戶

## ✅ 驗證設置

完成設置後，進行以下驗證：

1. **推送測試**:
   ```bash
   # 做一個小改動
   echo "# Test auto-build" >> README.md
   git add README.md
   git commit -m "Test auto-build trigger"
   git push origin main
   ```

2. **檢查 Actions**: 前往 Actions 頁面確認工作流程啟動

3. **驗證部署**: 檢查網站是否更新

4. **測試功能**: 確保應用程式功能正常

## 🎉 完成！

現在您的 Behavior Monitor 專案已經設置了完整的 CI/CD 流程：

- ✅ 自動構建：每次推送代碼自動構建
- ✅ 自動部署：構建成功後自動部署到 GitHub Pages
- ✅ 錯誤通知：構建失敗時會有明確的錯誤信息
- ✅ 狀態監控：可以實時查看構建和部署狀態

每次您修改代碼並推送到 main 分支，GitHub 都會自動：
1. 檢出最新代碼
2. 安裝依賴
3. 運行代碼檢查
4. 構建生產版本
5. 部署到 GitHub Pages

您的應用程式將在幾分鐘內自動更新！🚀

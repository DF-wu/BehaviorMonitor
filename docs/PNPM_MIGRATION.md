# 遷移到 pnpm 包管理器

## 🎯 遷移概述

本專案已從 npm 遷移到 pnpm 作為主要的包管理器，以獲得更好的性能、磁碟空間效率和依賴管理。

---

## 🚀 pnpm 優勢

### 性能提升
- **更快的安裝速度** - 利用硬連結和符號連結減少重複下載
- **並行安裝** - 同時處理多個包的安裝
- **智能緩存** - 全局緩存避免重複下載相同版本的包

### 磁碟空間效率
- **節省空間** - 通過硬連結共享相同的包文件
- **去重機制** - 避免在不同專案中重複存儲相同的依賴
- **精確的依賴樹** - 只安裝實際需要的依賴

### 安全性
- **嚴格的依賴解析** - 防止幽靈依賴（phantom dependencies）
- **確定性安裝** - 保證在不同環境中的一致性
- **lockfile 驗證** - 確保依賴的完整性

---

## 🔧 遷移步驟

### 1. 安裝 pnpm
```bash
# 使用 npm 安裝 pnpm（一次性）
npm install -g pnpm

# 或使用 Homebrew (macOS)
brew install pnpm

# 或使用 Corepack (Node.js 16.13+)
corepack enable
corepack prepare pnpm@latest --activate
```

### 2. 清理舊的 npm 文件
```bash
# 刪除 npm 相關文件
rm -rf node_modules package-lock.json

# 清理 npm 緩存（可選）
npm cache clean --force
```

### 3. 使用 pnpm 安裝依賴
```bash
# 安裝所有依賴
pnpm install

# 或使用凍結的 lockfile（CI/CD 環境推薦）
pnpm install --frozen-lockfile
```

---

## 📝 更新的文件

### package.json
```json
{
  "scripts": {
    "deploy:gh-pages": "pnpm run build && gh-pages -d dist"
  }
}
```

### GitHub Actions (.github/workflows/deploy.yml)
```yaml
- name: Setup pnpm
  uses: pnpm/action-setup@v4
  with:
    version: 8

- name: Install dependencies
  run: pnpm install --frozen-lockfile

- name: Run ESLint
  run: pnpm run lint

- name: Build application
  run: pnpm run build
```

---

## 🛠 常用 pnpm 命令

### 依賴管理
```bash
# 安裝依賴
pnpm install                    # 安裝所有依賴
pnpm add <package>             # 添加生產依賴
pnpm add -D <package>          # 添加開發依賴
pnpm remove <package>          # 移除依賴

# 更新依賴
pnpm update                    # 更新所有依賴
pnpm update <package>          # 更新特定包
```

### 腳本執行
```bash
# 運行腳本
pnpm run dev                   # 開發模式
pnpm run build                 # 生產構建
pnpm run lint                  # 代碼檢查
pnpm run preview               # 預覽構建

# 直接執行（無需 run）
pnpm dev                       # 等同於 pnpm run dev
pnpm build                     # 等同於 pnpm run build
```

### 信息查看
```bash
pnpm list                      # 查看已安裝的包
pnpm outdated                  # 查看過時的包
pnpm audit                     # 安全審計
pnpm why <package>             # 查看包的依賴關係
```

---

## 🔍 pnpm vs npm 對比

| 功能 | npm | pnpm |
|------|-----|------|
| 安裝速度 | 慢 | 快 |
| 磁碟空間 | 大 | 小 |
| 依賴解析 | 扁平化 | 嚴格 |
| 幽靈依賴 | 可能存在 | 不存在 |
| lockfile | package-lock.json | pnpm-lock.yaml |
| 緩存機制 | 基本 | 高效 |

---

## 📋 遷移檢查清單

### ✅ 已完成
- [x] 安裝 pnpm
- [x] 清理 npm 文件（node_modules, package-lock.json）
- [x] 使用 pnpm 重新安裝依賴
- [x] 更新 package.json 腳本
- [x] 更新 GitHub Actions 工作流程
- [x] 添加缺少的依賴（@ant-design/icons）
- [x] 驗證本地構建成功
- [x] 生成 pnpm-lock.yaml

### 🔄 待驗證
- [ ] GitHub Actions 構建成功
- [ ] 部署流程正常
- [ ] 所有功能正常運作

---

## 🐛 常見問題

### Q: pnpm-lock.yaml 是什麼？
A: 這是 pnpm 的 lockfile，類似於 npm 的 package-lock.json，用於鎖定依賴版本確保一致性。

### Q: 如何處理 peer dependencies 警告？
A: pnpm 會顯示 peer dependencies 警告，這是正常的。可以通過 `.pnpmrc` 配置文件調整行為。

### Q: 團隊成員需要安裝 pnpm 嗎？
A: 是的，所有開發者都需要安裝 pnpm。可以在 README 中添加安裝說明。

### Q: 如何回退到 npm？
A: 刪除 pnpm-lock.yaml 和 node_modules，然後運行 `npm install`。

---

## 📊 性能對比

### 安裝時間（估計）
- **npm**: ~30-45 秒
- **pnpm**: ~15-25 秒
- **改善**: ~40-50% 更快

### 磁碟空間（估計）
- **npm**: ~200-300 MB
- **pnpm**: ~100-150 MB  
- **節省**: ~50% 空間

---

## 🎯 下一步

1. **監控 GitHub Actions** - 確認 CI/CD 流程正常
2. **團隊通知** - 通知團隊成員安裝 pnpm
3. **文檔更新** - 更新開發指南中的安裝說明
4. **性能監控** - 觀察構建和部署性能改善

---

## 📞 支援

如果遇到 pnpm 相關問題：
- 查看 [pnpm 官方文檔](https://pnpm.io/)
- 檢查 [故障排除指南](./TROUBLESHOOTING.md)
- 提交 [GitHub Issue](https://github.com/DF-wu/BehaviorMonitor/issues)

---

*遷移完成日期：2024年1月*

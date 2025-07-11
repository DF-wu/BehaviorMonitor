#!/bin/bash

# Behavior Monitor 部署腳本
# 用於將專案部署到 GitHub Pages

set -e

echo "🚀 開始部署 Behavior Monitor 到 GitHub Pages..."

# 檢查是否有未提交的變更
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  警告：有未提交的變更，請先提交所有變更"
    git status --short
    read -p "是否繼續部署？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ 部署已取消"
        exit 1
    fi
fi

# 建構專案
echo "📦 建構專案..."
npm run build

# 檢查建構是否成功
if [ ! -d "dist" ]; then
    echo "❌ 建構失敗：找不到 dist 目錄"
    exit 1
fi

# 進入建構目錄
cd dist

# 初始化 git（如果需要）
if [ ! -d ".git" ]; then
    git init
    git checkout -b gh-pages
fi

# 添加所有文件
git add -A

# 提交變更
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到 GitHub Pages
echo "🚀 推送到 GitHub Pages..."
git push -f origin gh-pages

# 返回專案根目錄
cd ..

echo "✅ 部署完成！"
echo "🌐 您的網站將在幾分鐘內可用："
echo "   https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^.]*\).*/\1.github.io\/\2/')/"

echo ""
echo "📝 後續步驟："
echo "1. 前往 GitHub 專案設定頁面"
echo "2. 在 Pages 設定中選擇 'gh-pages' 分支"
echo "3. 等待部署完成（通常需要 1-5 分鐘）"

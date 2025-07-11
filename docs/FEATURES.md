# 功能特色

## 🎯 概述

本文檔詳細介紹 Behavior Monitor 系統的所有特色功能，包括 Lazy Update 自動補齊機制、無限制操作系統和豐富的統計圖表功能。

---

## 🔄 Lazy Update 和限制移除功能

### 功能概述
Lazy Update 是一個智能的分數管理機制，能夠自動補齊用戶錯過的每日分數增加，同時移除了系統中所有不必要的限制。

### 核心特性

#### 1. 自動補齊每日分數
```typescript
// 當用戶訪問系統時自動檢查並補齊
const checkAndUpdateDailyScore = async () => {
  const lastUpdate = await getLastUpdateDate();
  const today = new Date();
  const daysDiff = calculateDaysDifference(lastUpdate, today);
  
  if (daysDiff > 0) {
    const incrementAmount = daysDiff * settings.dailyIncrement;
    await updateScore(incrementAmount, `自動補齊 ${daysDiff} 天的每日分數`);
  }
};
```

#### 2. 智能日期計算
- **精確計算**: 基於 UTC 時間的精確日期差異計算
- **跨時區支援**: 自動處理不同時區的日期問題
- **夏令時處理**: 正確處理夏令時變更

#### 3. 無縫用戶體驗
- **透明操作**: 用戶無需手動觸發，系統自動處理
- **即時更新**: 補齊後立即更新顯示
- **歷史記錄**: 自動補齊操作會記錄在歷史中

### 限制移除

#### 1. 分數操作無限制
- **移除分數範圍限制**: 可以設定任意大小的分數變化
- **移除操作頻率限制**: 無限制的操作次數
- **移除批量操作限制**: 支援大量快速操作

#### 2. 訊息長度無限制
- **移除原因長度限制**: 可以輸入詳細的操作原因
- **支援多行文字**: 允許換行和格式化文字
- **Unicode 支援**: 完整支援各種語言和特殊字符

#### 3. 歷史記錄無限制
- **無限制存儲**: 所有歷史記錄永久保存
- **完整搜尋**: 支援全文搜尋和過濾
- **批量操作**: 支援批量查看和管理

### 實現細節

#### 自動檢查機制
```typescript
// 在應用啟動時自動檢查
useEffect(() => {
  const initializeApp = async () => {
    await checkAndUpdateDailyScore();
    await loadCurrentScore();
  };
  
  initializeApp();
}, []);
```

#### 錯誤處理
```typescript
try {
  await updateDailyScore();
} catch (error) {
  console.error('自動更新失敗:', error);
  // 靜默失敗，不影響用戶體驗
}
```

---

## 📊 公開視圖統計圖表功能

### 功能概述
豐富的統計圖表系統，為用戶提供全面的數據分析和視覺化展示，幫助理解行為模式和趨勢。

### 圖表類型

#### 1. 趨勢分析線圖
```typescript
// 顯示分數隨時間的變化趨勢
const trendData = records.map(record => ({
  date: record.timestamp.toDate().toLocaleDateString(),
  score: record.currentTotal,
  change: record.score
}));
```

**特色功能**:
- **時間軸導覽**: 可縮放和平移的時間軸
- **數據點詳情**: 懸停顯示詳細信息
- **趨勢線**: 自動計算和顯示趨勢線
- **區間選擇**: 支援自定義時間範圍

#### 2. 每日統計柱狀圖
```typescript
// 按日期統計每日的分數變化
const dailyStats = groupByDate(records).map(group => ({
  date: group.date,
  rewards: group.rewards.reduce((sum, r) => sum + r.score, 0),
  penalties: Math.abs(group.penalties.reduce((sum, p) => sum + p.score, 0)),
  net: group.net
}));
```

**特色功能**:
- **雙向柱狀圖**: 獎勵和懲罰分別顯示
- **淨值計算**: 自動計算每日淨分數變化
- **顏色編碼**: 直觀的顏色區分正負變化
- **數據標籤**: 顯示具體數值

#### 3. 活動熱力圖
```typescript
// 顯示一年中每天的活動強度
const heatmapData = generateYearData().map(day => ({
  date: day.date,
  count: day.operationCount,
  value: Math.abs(day.totalChange)
}));
```

**特色功能**:
- **年度視圖**: 完整年度的活動概覽
- **強度顯示**: 基於操作頻率的顏色深淺
- **互動提示**: 懸停顯示當日詳情
- **月份導覽**: 快速跳轉到特定月份

#### 4. 統計摘要面板
```typescript
// 計算和顯示關鍵統計指標
const statistics = {
  totalOperations: records.length,
  totalRewards: rewards.reduce((sum, r) => sum + r.score, 0),
  totalPenalties: Math.abs(penalties.reduce((sum, p) => sum + p.score, 0)),
  averageDaily: calculateAverageDaily(),
  streaks: calculateStreaks()
};
```

**包含指標**:
- **總操作次數**: 所有操作的統計
- **獎勵/懲罰總計**: 分類統計
- **平均每日變化**: 自動計算平均值
- **連續記錄**: 連續正面/負面天數

### 互動功能

#### 1. 時間範圍選擇
- **預設範圍**: 最近7天、30天、90天、全部
- **自定義範圍**: 日期選擇器自定義時間段
- **快速切換**: 一鍵切換不同時間視圖

#### 2. 數據過濾
- **操作類型過濾**: 只顯示獎勵或懲罰
- **分數範圍過濾**: 按分數大小過濾
- **關鍵字搜尋**: 按操作原因搜尋

#### 3. 圖表導出
- **圖片導出**: 支援 PNG、SVG 格式
- **數據導出**: 支援 CSV、JSON 格式
- **列印友好**: 優化的列印樣式

### 響應式設計

#### 移動端優化
- **觸控友好**: 優化的觸控操作
- **自適應佈局**: 根據螢幕大小調整
- **簡化視圖**: 移動端的簡化圖表

#### 性能優化
- **虛擬滾動**: 處理大量數據點
- **懶加載**: 按需載入圖表數據
- **緩存機制**: 智能的數據緩存

---

## 🎨 視覺設計特色

### 動態主題
- **分數驅動色彩**: 根據當前分數自動調整主題色彩
- **平滑過渡**: 所有顏色變化都有平滑動畫
- **無障礙設計**: 符合 WCAG 2.1 標準的對比度

### 動畫效果
- **載入動畫**: 優雅的數據載入動畫
- **過渡動畫**: 平滑的頁面和狀態切換
- **互動反饋**: 即時的用戶操作反饋

### 圖表美化
- **現代化設計**: 簡潔現代的圖表樣式
- **品牌一致性**: 與整體設計風格一致
- **專業外觀**: 適合展示和分享的專業外觀

---

## 🚀 技術實現

### 圖表庫
- **@ant-design/charts**: 基於 G2Plot 的專業圖表庫
- **高性能渲染**: Canvas 和 SVG 混合渲染
- **豐富配置**: 靈活的配置選項

### 數據處理
- **實時計算**: 即時的數據統計和計算
- **記憶體優化**: 高效的數據結構和算法
- **錯誤處理**: 完善的錯誤處理機制

### 狀態管理
- **React Context**: 全局狀態管理
- **本地緩存**: 智能的本地數據緩存
- **同步機制**: 與 Firebase 的實時同步

---

## 📈 使用效果

### 用戶體驗提升
- **直觀理解**: 圖表讓數據更容易理解
- **趨勢洞察**: 幫助發現行為模式和趨勢
- **動機激勵**: 視覺化進度激勵持續改進

### 管理效率提升
- **快速概覽**: 一目了然的統計摘要
- **深度分析**: 詳細的數據分析工具
- **決策支援**: 基於數據的決策支援

---

## 📞 相關資源

- [開發指南](./DEVELOPMENT.md)
- [專案信息](./PROJECT.md)
- [技術升級記錄](./TECHNICAL_UPGRADES.md)

---

*最後更新：2024年1月*

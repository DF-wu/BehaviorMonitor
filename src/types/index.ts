/**
 * 應用程式的 TypeScript 類型定義
 * 
 * 這個文件定義了整個應用程式中使用的資料結構和類型
 * 包括分數記錄、系統設定、統計資料等
 */

// 分數變動記錄的類型定義
export interface ScoreRecord {
  id: string;                    // 記錄的唯一識別碼
  score: number;                 // 分數變動量（正數為獎勵，負數為懲罰）
  reason: string;                // 分數變動的原因
  timestamp: Date;               // 記錄創建的時間戳
  type: 'reward' | 'punishment'; // 記錄類型：獎勵或懲罰
}

// 系統設定的類型定義
export interface SystemSettings {
  id: string;                    // 設定的唯一識別碼
  initialScore: number;          // 初始分數
  dailyIncrement: number;        // 每日自動增加的分數
  notificationThreshold: number; // 通知門檻分數
  adminPassword: string;         // 管理員密碼
  createdAt: Date;              // 設定創建時間
  updatedAt: Date;              // 設定最後更新時間
}

// 每日分數快照的類型定義
// 用於統計和圖表顯示
export interface DailyScore {
  id: string;                    // 快照的唯一識別碼
  date: string;                  // 日期（YYYY-MM-DD 格式）
  totalScore: number;            // 當日結束時的總分數
  dailyChange: number;           // 當日分數變動總量
  rewardCount: number;           // 當日獎勵次數
  punishmentCount: number;       // 當日懲罰次數
  autoIncrement: number;         // 當日自動增加的分數
}

// 統計資料的類型定義
export interface Statistics {
  totalScore: number;            // 目前總分數
  highestScore: number;          // 歷史最高分數
  lowestScore: number;           // 歷史最低分數
  averageScore: number;          // 平均分數
  totalRewards: number;          // 總獎勵次數
  totalPunishments: number;      // 總懲罰次數
  rewardSum: number;             // 獎勵分數總和
  punishmentSum: number;         // 懲罰分數總和
}

// 時間範圍選擇的類型定義
export type TimeRange = '7days' | '30days' | 'thisMonth' | '6months';

// 圖表資料點的類型定義
export interface ChartDataPoint {
  date: string;                  // 日期
  value: number;                 // 數值
  label?: string;                // 可選的標籤
}

// 應用程式狀態的類型定義
export interface AppState {
  isAdminMode: boolean;          // 是否處於管理員模式
  currentScore: number;          // 目前分數
  scoreRecords: ScoreRecord[];   // 分數記錄列表
  settings: SystemSettings | null; // 系統設定
  statistics: Statistics | null; // 統計資料
  loading: boolean;              // 載入狀態
  error: string | null;          // 錯誤訊息
}

// Action types for state management using const assertions
// 使用 const assertions 來定義 action types，避免 enum 在 TypeScript 嚴格模式下的問題
export const ActionType = {
  SET_ADMIN_MODE: 'SET_ADMIN_MODE',
  SET_CURRENT_SCORE: 'SET_CURRENT_SCORE',
  SET_SCORE_RECORDS: 'SET_SCORE_RECORDS',
  ADD_SCORE_RECORD: 'ADD_SCORE_RECORD',
  SET_SETTINGS: 'SET_SETTINGS',
  SET_STATISTICS: 'SET_STATISTICS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
} as const;

// Extract the union type from the const object
// 從 const object 中提取 union type，用於 type checking
export type ActionTypeValues = typeof ActionType[keyof typeof ActionType];

// Specific action interfaces for type safety
// 具體的 action 介面，確保類型安全
export type Action =
  | { type: typeof ActionType.SET_ADMIN_MODE; payload: boolean }
  | { type: typeof ActionType.SET_CURRENT_SCORE; payload: number }
  | { type: typeof ActionType.SET_SCORE_RECORDS; payload: ScoreRecord[] }
  | { type: typeof ActionType.ADD_SCORE_RECORD; payload: ScoreRecord }
  | { type: typeof ActionType.SET_SETTINGS; payload: SystemSettings | null }
  | { type: typeof ActionType.SET_STATISTICS; payload: Statistics | null }
  | { type: typeof ActionType.SET_LOADING; payload: boolean }
  | { type: typeof ActionType.SET_ERROR; payload: string | null };

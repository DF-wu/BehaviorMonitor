/**
 * App Context Definition
 * 
 * This file contains the context definition and types to comply with
 * React Fast Refresh requirements (only components should be exported from component files)
 */

import { createContext } from 'react';
import type { AppState, Action, SystemSettings } from '../types';

// Context interface definition
// Context 介面定義，包含所有狀態和操作函數
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  // Action functions for easier usage
  // 操作函數，提供更簡潔的使用方式
  enterAdminMode: (password: string) => Promise<boolean>;
  exitAdminMode: () => void;
  addScore: (score: number, reason: string) => Promise<void>;
  loadScoreRecords: () => Promise<void>;
  loadSettings: () => Promise<void>;
  updateSettings: (settings: Partial<SystemSettings>) => Promise<void>;
  calculateStatistics: () => void;
}

// Create the context with undefined default value
// 創建 Context，預設值為 undefined，必須在 Provider 中使用
export const AppContext = createContext<AppContextType | undefined>(undefined);

export type { AppContextType };

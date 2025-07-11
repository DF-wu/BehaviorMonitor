/**
 * 應用程式狀態管理 Context
 * 
 * 使用 React Context API 和 useReducer 來管理全域狀態
 * 提供了狀態和操作函數給整個應用程式使用
 */

import { useReducer, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { AppState, Action, ScoreRecord, SystemSettings, Statistics } from '../types';
import { ActionType } from '../types';
import { ScoreService, SettingsService } from '../services/firebaseService';
import { message } from 'antd';

// 初始狀態
const initialState: AppState = {
  isAdminMode: false,
  currentScore: 0,
  scoreRecords: [],
  settings: null,
  statistics: null,
  loading: false,
  error: null,
};

// 狀態更新的 reducer 函數
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionType.SET_ADMIN_MODE:
      return { ...state, isAdminMode: action.payload };
    
    case ActionType.SET_CURRENT_SCORE:
      return { ...state, currentScore: action.payload };
    
    case ActionType.SET_SCORE_RECORDS:
      return { ...state, scoreRecords: action.payload };
    
    case ActionType.ADD_SCORE_RECORD:
      return { 
        ...state, 
        scoreRecords: [action.payload, ...state.scoreRecords] 
      };
    
    case ActionType.SET_SETTINGS:
      return { ...state, settings: action.payload };
    
    case ActionType.SET_STATISTICS:
      return { ...state, statistics: action.payload };
    
    case ActionType.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case ActionType.SET_ERROR:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}

// Import context definition from separate file to comply with fast refresh
import { AppContext, type AppContextType } from './AppContextDefinition';

// Context Provider 組件
interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  /**
   * 進入管理員模式
   * @param password 管理員密碼
   * @returns Promise<boolean> 是否成功進入
   */
  const enterAdminMode = async (password: string): Promise<boolean> => {
    try {
      const settings = await SettingsService.getSettings();
      if (settings && settings.adminPassword === password) {
        dispatch({ type: ActionType.SET_ADMIN_MODE, payload: true });
        message.success('已進入管理模式');
        return true;
      } else {
        message.error('密碼錯誤');
        return false;
      }
    } catch (error) {
      console.error('Error entering admin mode:', error);
      message.error('登入失敗');
      return false;
    }
  };

  /**
   * 退出管理員模式
   */
  const exitAdminMode = () => {
    dispatch({ type: ActionType.SET_ADMIN_MODE, payload: false });
    message.info('已退出管理模式');
  };

  /**
   * 新增分數記錄
   * @param score 分數變動量
   * @param reason 變動原因
   */
  const addScore = async (score: number, reason: string): Promise<void> => {
    try {
      dispatch({ type: ActionType.SET_LOADING, payload: true });
      
      const type = score > 0 ? 'reward' : 'punishment';
      const recordId = await ScoreService.addScoreRecord(score, reason, type);
      
      // 創建新記錄對象
      const newRecord: ScoreRecord = {
        id: recordId,
        score,
        reason,
        type,
        timestamp: new Date()
      };
      
      // 更新本地狀態
      dispatch({ type: ActionType.ADD_SCORE_RECORD, payload: newRecord });
      dispatch({ type: ActionType.SET_CURRENT_SCORE, payload: state.currentScore + score });
      
      // 重新計算統計資料
      calculateStatistics();
      
      message.success(`已${type === 'reward' ? '獎勵' : '懲罰'} ${Math.abs(score)} 分`);
    } catch (error) {
      console.error('Error adding score:', error);
      message.error('新增分數失敗');
      dispatch({ type: ActionType.SET_ERROR, payload: '新增分數失敗' });
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  /**
   * 載入分數記錄
   */
  const loadScoreRecords = async (): Promise<void> => {
    try {
      dispatch({ type: ActionType.SET_LOADING, payload: true });
      const records = await ScoreService.getScoreRecords();
      dispatch({ type: ActionType.SET_SCORE_RECORDS, payload: records });
      
      // 計算目前總分
      const totalScore = records.reduce((sum, record) => sum + record.score, 0);
      dispatch({ type: ActionType.SET_CURRENT_SCORE, payload: totalScore });
      
    } catch (error) {
      console.error('Error loading score records:', error);
      dispatch({ type: ActionType.SET_ERROR, payload: '載入分數記錄失敗' });
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  /**
   * 載入系統設定
   */
  const loadSettings = async (): Promise<void> => {
    try {
      const settings = await SettingsService.getSettings();
      if (!settings) {
        // 如果沒有設定，初始化預設設定
        await SettingsService.initializeDefaultSettings();
        const defaultSettings = await SettingsService.getSettings();
        dispatch({ type: ActionType.SET_SETTINGS, payload: defaultSettings });
      } else {
        dispatch({ type: ActionType.SET_SETTINGS, payload: settings });
      }
    } catch (error) {
      console.error('Error loading settings:', error);
      dispatch({ type: ActionType.SET_ERROR, payload: '載入系統設定失敗' });
    }
  };

  /**
   * 更新系統設定
   * @param settings 設定資料
   */
  const updateSettings = async (settings: Partial<SystemSettings>): Promise<void> => {
    try {
      dispatch({ type: ActionType.SET_LOADING, payload: true });
      await SettingsService.updateSettings(settings);
      
      // 重新載入設定
      await loadSettings();
      message.success('設定已更新');
    } catch (error) {
      console.error('Error updating settings:', error);
      message.error('更新設定失敗');
      dispatch({ type: ActionType.SET_ERROR, payload: '更新設定失敗' });
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  /**
   * Calculate statistics based on current score records
   * 根據目前的分數記錄計算統計資料
   * Wrapped in useCallback to prevent unnecessary re-renders
   */
  const calculateStatistics = useCallback(() => {
    const { scoreRecords } = state;
    // settings - removed unused destructuring
    
    if (scoreRecords.length === 0) {
      dispatch({ type: ActionType.SET_STATISTICS, payload: null });
      return;
    }

    const totalScore = scoreRecords.reduce((sum, record) => sum + record.score, 0);
    const rewardRecords = scoreRecords.filter(record => record.type === 'reward');
    const punishmentRecords = scoreRecords.filter(record => record.type === 'punishment');
    
    const statistics: Statistics = {
      totalScore,
      highestScore: Math.max(...scoreRecords.map(r => r.score)),
      lowestScore: Math.min(...scoreRecords.map(r => r.score)),
      averageScore: totalScore / scoreRecords.length,
      totalRewards: rewardRecords.length,
      totalPunishments: punishmentRecords.length,
      rewardSum: rewardRecords.reduce((sum, record) => sum + record.score, 0),
      punishmentSum: punishmentRecords.reduce((sum, record) => sum + record.score, 0),
    };

    dispatch({ type: ActionType.SET_STATISTICS, payload: statistics });
  }, [state.scoreRecords, dispatch]);

  // 初始化載入資料
  useEffect(() => {
    loadScoreRecords();
    loadSettings();
  }, []);

  // 當分數記錄變化時重新計算統計資料
  useEffect(() => {
    calculateStatistics();
  }, [state.scoreRecords, calculateStatistics]);

  const contextValue: AppContextType = {
    state,
    dispatch,
    enterAdminMode,
    exitAdminMode,
    addScore,
    loadScoreRecords,
    loadSettings,
    updateSettings,
    calculateStatistics,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// useApp hook moved to separate file to comply with fast refresh requirements

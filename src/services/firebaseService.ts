/**
 * Firebase 服務層
 * 
 * 這個文件包含了所有與 Firebase Firestore 資料庫交互的函數
 * 提供了 CRUD 操作的抽象層，讓組件不需要直接操作 Firebase API
 */

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
  Timestamp,
  // writeBatch - removed unused import
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { ScoreRecord, SystemSettings, DailyScore } from '../types';

// Firestore 集合名稱常數
const COLLECTIONS = {
  SCORE_RECORDS: 'scoreRecords',
  SETTINGS: 'settings',
  DAILY_SCORES: 'dailyScores'
} as const;

/**
 * 分數記錄相關的服務函數
 */
export class ScoreService {
  /**
   * 獲取所有分數記錄
   * @param limitCount 限制返回的記錄數量，預設為 50
   * @returns Promise<ScoreRecord[]>
   */
  static async getScoreRecords(limitCount: number = 50): Promise<ScoreRecord[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.SCORE_RECORDS),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      })) as ScoreRecord[];
    } catch (error) {
      console.error('Error fetching score records:', error);
      throw new Error('無法獲取分數記錄');
    }
  }

  /**
   * 新增分數記錄
   * @param score 分數變動量
   * @param reason 變動原因
   * @param type 記錄類型
   * @returns Promise<string> 新記錄的 ID
   */
  static async addScoreRecord(
    score: number, 
    reason: string, 
    type: 'reward' | 'punishment'
  ): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, COLLECTIONS.SCORE_RECORDS), {
        score,
        reason,
        type,
        timestamp: Timestamp.now()
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error adding score record:', error);
      throw new Error('無法新增分數記錄');
    }
  }

  /**
   * 刪除分數記錄
   * @param recordId 記錄 ID
   */
  static async deleteScoreRecord(recordId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, COLLECTIONS.SCORE_RECORDS, recordId));
    } catch (error) {
      console.error('Error deleting score record:', error);
      throw new Error('無法刪除分數記錄');
    }
  }

  /**
   * 監聽分數記錄變化
   * @param callback 回調函數
   * @param limitCount 限制數量
   * @returns 取消監聽的函數
   */
  static subscribeToScoreRecords(
    callback: (records: ScoreRecord[]) => void,
    limitCount: number = 50
  ) {
    const q = query(
      collection(db, COLLECTIONS.SCORE_RECORDS),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );

    return onSnapshot(q, (querySnapshot) => {
      const records = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      })) as ScoreRecord[];
      
      callback(records);
    });
  }
}

/**
 * 系統設定相關的服務函數
 */
export class SettingsService {
  private static readonly SETTINGS_DOC_ID = 'main';

  /**
   * 獲取系統設定
   * @returns Promise<SystemSettings | null>
   */
  static async getSettings(): Promise<SystemSettings | null> {
    try {
      const docRef = doc(db, COLLECTIONS.SETTINGS, this.SETTINGS_DOC_ID);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date()
        } as SystemSettings;
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw new Error('無法獲取系統設定');
    }
  }

  /**
   * 更新系統設定
   * @param settings 設定資料
   */
  static async updateSettings(settings: Partial<SystemSettings>): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.SETTINGS, this.SETTINGS_DOC_ID);
      await updateDoc(docRef, {
        ...settings,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating settings:', error);
      throw new Error('無法更新系統設定');
    }
  }

  /**
   * 初始化預設設定
   */
  static async initializeDefaultSettings(): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.SETTINGS, this.SETTINGS_DOC_ID);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        await updateDoc(docRef, {
          initialScore: 100,
          dailyIncrement: 1,
          notificationThreshold: 50,
          adminPassword: 'admin123',
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        });
      }
    } catch (error) {
      console.error('Error initializing settings:', error);
      throw new Error('無法初始化系統設定');
    }
  }
}

/**
 * 每日分數快照相關的服務函數
 */
export class DailyScoreService {
  /**
   * 獲取指定日期範圍的每日分數
   * @param startDate 開始日期
   * @param endDate 結束日期
   * @returns Promise<DailyScore[]>
   */
  static async getDailyScores(startDate: Date, endDate: Date): Promise<DailyScore[]> {
    try {
      const startDateStr = startDate.toISOString().split('T')[0];
      const endDateStr = endDate.toISOString().split('T')[0];
      
      const q = query(
        collection(db, COLLECTIONS.DAILY_SCORES),
        where('date', '>=', startDateStr),
        where('date', '<=', endDateStr),
        orderBy('date', 'asc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as DailyScore[];
    } catch (error) {
      console.error('Error fetching daily scores:', error);
      throw new Error('無法獲取每日分數資料');
    }
  }

  /**
   * 更新或創建每日分數快照
   * @param date 日期
   * @param scoreData 分數資料
   */
  static async updateDailyScore(date: string, scoreData: Partial<DailyScore>): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.DAILY_SCORES, date);
      await updateDoc(docRef, scoreData);
    } catch (error) {
      console.error('Error updating daily score:', error);
      throw new Error('無法更新每日分數');
    }
  }
}

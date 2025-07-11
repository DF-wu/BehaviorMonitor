/**
 * @file Firebase 服務層
 * @description 這個文件包含了所有與 Firebase Firestore 資料庫交互的函數。
 *              它提供了一個抽象層，讓 UI 組件不需要直接操作 Firebase 的底層 API，
 *              使得程式碼更乾淨、更容易維護和測試。
 */

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { ScoreRecord, SystemSettings, DailyScore } from '../types';

/**
 * @constant COLLECTIONS
 * @description 定義 Firestore 中所有集合 (collections) 的名稱。
 *              使用常數可以避免在程式碼中直接寫死字串（Magic Strings），
 *              從而減少打錯字的風險，並方便未來統一修改。
 */
const COLLECTIONS = {
  SCORE_RECORDS: 'scoreRecords',
  SETTINGS: 'settings',
  DAILY_SCORES: 'dailyScores'
} as const;

/**
 * @class ScoreService
 * @description 處理所有與「分數記錄」相關的資料庫操作。
 */
export class ScoreService {
  /**
   * 獲取所有分數記錄，並在獲取前觸發「惰性每日分數更新」。
   * 這是前端獲取分數列表的主要入口點。
   * @param {number} [limitCount=50] - 限制返回的記錄數量，預設為 50。
   * @returns {Promise<ScoreRecord[]>} - 一個包含分數記錄陣列的 Promise。
   * @throws {Error} 如果從 Firebase 獲取資料失敗。
   */
  static async getScoreRecords(limitCount: number = 50): Promise<ScoreRecord[]> {
    try {
      // 步驟 1: 在真正獲取分數列表前，先執行一次每日分數的補齊檢查。
      // 這是實現「惰性更新」的核心。
      await this.performLazyDailyUpdate();

      // 步驟 2: 建立查詢，按時間倒序獲取最新的分數記錄。
      const q = query(
        collection(db, COLLECTIONS.SCORE_RECORDS),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );

      // 步驟 3: 執行查詢並將結果轉換為我們定義的 ScoreRecord 型別。
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate() // 將 Firestore Timestamp 轉換為 JS Date 物件
      })) as ScoreRecord[];
    } catch (error) {
      console.error('Error fetching score records:', error);
      throw new Error('無法獲取分數記錄');
    }
  }

  /**
   * 新增一筆分數記錄。
   * @param {number} score - 分數變動量 (正數為獎勵，負數為懲罰)。
   * @param {string} reason - 變動原因。
   * @param {'reward' | 'punishment'} type - 記錄類型。
   * @returns {Promise<string>} - 新增記錄的文檔 ID。
   * @throws {Error} 如果新增記錄失敗。
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
        timestamp: Timestamp.now() // 使用伺服器時間戳，更準確
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error adding score record:', error);
      throw new Error('無法新增分數記錄');
    }
  }

  /**
   * 根據 ID 刪除一筆分數記錄。
   * @param {string} recordId - 要刪除的記錄的文檔 ID。
   * @returns {Promise<void>}
   * @throws {Error} 如果刪除失敗。
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
   * 監聽分數記錄的即時變化。
   * @param {(records: ScoreRecord[]) => void} callback - 當資料變化時執行的回調函數。
   * @param {number} [limitCount=50] - 監聽的記錄數量。
   * @returns {() => void} - 一個可以呼叫來取消監聽的函數。
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

    // onSnapshot 會建立一個即時監聽器，當資料庫內容變化時，會自動觸發回調。
    return onSnapshot(q, (querySnapshot) => {
      const records = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      })) as ScoreRecord[];
      
      callback(records);
    });
  }

  /**
   * 執行「惰性」的每日分數增加更新。
   * 這個函式會檢查從上次成功增加每日分數到今天為止，所有被錯過的日子，
   * 並根據設定的條件（當天無懲罰、當天未加過分）來補齊分數。
   * @returns {Promise<void>}
   */
  static async performLazyDailyUpdate(): Promise<void> {
    try {
      // 步驟 1: 獲取系統設定，檢查每日加分功能是否開啟。
      const settings = await SettingsService.getSettings();
      if (!settings || settings.dailyIncrement <= 0) {
        return; // 如果設定不存在或每日加分小於等於0，則直接返回。
      }

      // 步驟 2: 獲取最後一次「每日自動增加」的紀錄，以確定從哪天開始檢查。
      const lastIncrementRecord = await this.getLastDailyIncrementRecord();
      const today = new Date();
      today.setHours(0, 0, 0, 0); // 將時間設為今天凌晨0點，以方便日期比較。

      let lastIncrementDate: Date;
      if (lastIncrementRecord) {
        // 如果找到了上次的加分紀錄，就從那天開始算。
        lastIncrementDate = new Date(lastIncrementRecord.timestamp);
        lastIncrementDate.setHours(0, 0, 0, 0);
      } else {
        // 如果從未有過加分紀錄（系統首次運行），則將起始日期設為「昨天」。
        // 這樣可以確保今天的加分會被納入計算，同時避免了在同一天內重複計算的複雜性。
        lastIncrementDate = new Date(today);
        lastIncrementDate.setDate(today.getDate() - 1);
      }

      // 步驟 3: 計算今天與上次加分日期之間相差的天數。
      const daysDifference = Math.floor((today.getTime() - lastIncrementDate.getTime()) / (1000 * 60 * 60 * 24));

      // 如果天數差小於等於0，表示沒有需要補齊的日子，直接返回。
      if (daysDifference <= 0) {
        return;
      }

      console.log(`Checking daily increments for the last ${daysDifference} days...`);

      // 步驟 4: 遍歷所有錯過的天數，逐一檢查是否符合加分條件。
      for (let i = 1; i <= daysDifference; i++) {
        const checkDate = new Date(lastIncrementDate);
        checkDate.setDate(lastIncrementDate.getDate() + i);

        // 條件 1: 檢查這一天是否已經被加過分了（防止重複執行）。
        const alreadyIncremented = await this.hasDailyIncrementOnDate(checkDate);
        if (alreadyIncremented) {
          console.log(`Skipping daily increment for ${checkDate.toLocaleDateString('zh-TW')}: already exists.`);
          continue; // 如果已加分，則跳過這一天，繼續檢查下一天。
        }

        // 條件 2: 檢查這一天是否有任何懲罰紀錄。
        const hasPunishment = await this.hasPunishmentOnDate(checkDate);
        if (hasPunishment) {
          console.log(`Skipping daily increment for ${checkDate.toLocaleDateString('zh-TW')}: punishment found.`);
          continue; // 如果有懲罰，則跳過這一天，繼續檢查下一天。
        }
        
        // 所有條件都通過，執行加分。
        const incrementTimestamp = new Date(checkDate);
        incrementTimestamp.setHours(12, 0, 0, 0); // 將時間戳設為當天中午，以避免跨時區時日期錯亂的問題。

        await this.addScoreRecord(
          settings.dailyIncrement,
          `每日自動增加 (${incrementTimestamp.toLocaleDateString('zh-TW')})`,
          'reward'
        );
        console.log(`Added daily increment for ${incrementTimestamp.toLocaleDateString('zh-TW')}`);
      }

      console.log('Lazy daily update check completed.');
    } catch (error) {
      console.error('Error in lazy daily update:', error);
      // 此處不向上拋出錯誤，是為了確保即使每日加分邏輯失敗，
      // 也不會中斷主要的 getScoreRecords 流程，從而提高應用的穩定性。
    }
  }

  /**
   * 獲取最後一次「每日自動增加」的記錄。
   * 這是一個私有輔助函式。
   * @private
   * @returns {Promise<ScoreRecord | null>} - 返回最新的每日增加記錄，如果不存在則返回 null。
   */
  private static async getLastDailyIncrementRecord(): Promise<ScoreRecord | null> {
    try {
      // 這個查詢非常巧妙，它利用了字串排序的原理來實現「前綴搜索」。
      const q = query(
        collection(db, COLLECTIONS.SCORE_RECORDS),
        // 條件1: reason 欄位大於等於 "每日自動增加"。
        where('reason', '>=', '每日自動增加'),
        // 條件2: reason 欄位小於 "每日自動增加" + 一個極大的 Unicode 字元。
        // \uf8ff 是 Unicode 私用區的一個字元，在排序上非常靠後。
        // 這兩個條件結合，就能篩選出所有以 "每日自動增加" 開頭的 reason。
        where('reason', '<', '每日自動增加\uf8ff'),
        // Firestore 要求，如果對某個欄位進行了範圍查詢，那麼第一個排序也必須是該欄位。
        orderBy('reason'),
        // 真正有效的排序：按時間倒序，最新的排在最前面。
        orderBy('timestamp', 'desc'),
        // 我們只需要最新的那一筆記錄。
        limit(1)
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return null; // 如果找不到任何記錄，返回 null。
      }

      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      } as ScoreRecord;
    } catch (error) {
      console.error('Error getting last daily increment record:', error);
      return null; // 如果查詢出錯，也返回 null，讓主流程能安全地繼續。
    }
  }

  /**
   * 檢查指定日期是否已經存在「每日自動增加」的紀錄。
   * @private
   * @param {Date} date - 要檢查的日期。
   * @returns {Promise<boolean>} - 如果存在則返回 true，否則返回 false。
   */
  private static async hasDailyIncrementOnDate(date: Date): Promise<boolean> {
    try {
      // 設定查詢的時間範圍為指定日期的 00:00:00 到 23:59:59。
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      // 查詢條件與 getLastDailyIncrementRecord 類似，但增加了時間範圍的限制。
      const q = query(
        collection(db, COLLECTIONS.SCORE_RECORDS),
        where('reason', '>=', '每日自動增加'),
        where('reason', '<', '每日自動增加\uf8ff'),
        where('timestamp', '>=', Timestamp.fromDate(startOfDay)),
        where('timestamp', '<=', Timestamp.fromDate(endOfDay)),
        limit(1) // 只要找到一筆就夠了，可以立即停止查詢。
      );

      const querySnapshot = await getDocs(q);
      // 如果查詢結果不為空，表示當天已經有加分紀錄。
      return !querySnapshot.empty;
    } catch (error) {
      console.error(`Error checking for daily increment on ${date.toDateString()}:`, error);
      // 安全性考量：如果檢查過程出錯，預設返回 true，避免因錯誤而重複加分。
      return true;
    }
  }

  /**
   * 檢查指定日期是否有「懲罰」類型的紀錄。
   * @private
   * @param {Date} date - 要檢查的日期。
   * @returns {Promise<boolean>} - 如果存在懲罰記錄則返回 true，否則返回 false。
   */
  private static async hasPunishmentOnDate(date: Date): Promise<boolean> {
    try {
      // 設定查詢的時間範圍為指定日期的 00:00:00 到 23:59:59。
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      const q = query(
        collection(db, COLLECTIONS.SCORE_RECORDS),
        // 核心條件：只查找 type 為 'punishment' 的記錄。
        where('type', '==', 'punishment'),
        where('timestamp', '>=', Timestamp.fromDate(startOfDay)),
        where('timestamp', '<=', Timestamp.fromDate(endOfDay)),
        limit(1) // 同樣，找到一筆就足夠證明當天有懲罰。
      );

      const querySnapshot = await getDocs(q);
      // 如果查詢結果不為空，表示當天有懲罰記錄。
      return !querySnapshot.empty;
    } catch (error) {
      console.error(`Error checking for punishment on ${date.toDateString()}:`, error);
      // 安全性考量：如果檢查過程出錯，預設返回 true，代表有懲罰，從而阻止當天的自動加分。
      return true;
    }
  }
}

/**
 * @class SettingsService
 * @description 處理所有與「系統設定」相關的資料庫操作。
 */
export class SettingsService {
  // 使用固定的文檔 ID "main"，確保系統設定只有一份，形成單例模式。
  private static readonly SETTINGS_DOC_ID = 'main';

  /**
   * 獲取系統設定。
   * @returns {Promise<SystemSettings | null>} - 返回設定物件，如果不存在則返回 null。
   * @throws {Error} 如果獲取失敗。
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
   * 更新系統設定。
   * @param {Partial<SystemSettings>} settings - 一個包含部分或全部設定欄位的物件。
   * @returns {Promise<void>}
   * @throws {Error} 如果更新失敗。
   */
  static async updateSettings(settings: Partial<SystemSettings>): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.SETTINGS, this.SETTINGS_DOC_ID);
      await updateDoc(docRef, {
        ...settings,
        updatedAt: Timestamp.now() // 每次更新時，自動更新 `updatedAt` 時間戳。
      });
    } catch (error) {
      console.error('Error updating settings:', error);
      throw new Error('無法更新系統設定');
    }
  }

  /**
   * 初始化預設的系統設定。
   * 只有在設定文檔完全不存在時才會執行，避免覆蓋用戶已有的設定。
   * @returns {Promise<void>}
   * @throws {Error} 如果初始化失敗。
   */
  static async initializeDefaultSettings(): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.SETTINGS, this.SETTINGS_DOC_ID);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        // 使用 setDoc 來創建一個全新的文檔。
        await setDoc(docRef, {
          initialScore: 100,
          dailyIncrement: 1,
          notificationThreshold: 50,
          adminPassword: 'admin123', // 注意：預設密碼應在首次使用後立即更改。
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        });
        console.log('Default settings initialized successfully');
      }
    } catch (error) {
      console.error('Error initializing settings:', error);
      throw new Error('無法初始化系統設定');
    }
  }
}

/**
 * @class DailyScoreService
 * @description 處理與「每日分數快照」相關的資料庫操作。
 *              這部分主要用於統計和圖表分析，將每日的最終結果快照下來，
 *              可以避免每次都對全量的 scoreRecords 進行複雜計算。
 */
export class DailyScoreService {
  /**
   * 獲取指定日期範圍內的每日分數快照。
   * @param {Date} startDate - 開始日期。
   * @param {Date} endDate - 結束日期。
   * @returns {Promise<DailyScore[]>} - 每日分數快照的陣列。
   * @throws {Error} 如果獲取失敗。
   */
  static async getDailyScores(startDate: Date, endDate: Date): Promise<DailyScore[]> {
    try {
      // 將日期轉換為 "YYYY-MM-DD" 格式的字串，以便於在 Firestore 中查詢。
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
   * 更新或創建指定日期的分數快照。
   * @param {string} date - "YYYY-MM-DD" 格式的日期字串。
   * @param {Partial<DailyScore>} scoreData - 要更新的分數資料。
   * @returns {Promise<void>}
   * @throws {Error} 如果更新失敗。
   */
  static async updateDailyScore(date: string, scoreData: Partial<DailyScore>): Promise<void> {
    try {
      // 使用日期字串作為文檔 ID，確保每天只有一筆快照記錄。
      const docRef = doc(db, COLLECTIONS.DAILY_SCORES, date);
      // 注意：這裡使用的是 updateDoc，如果文檔不存在可能會報錯。
      // 如果需要「不存在則創建，存在則更新」的效果，應先 getDoc 檢查，或使用 setDoc 配合 merge:true 選項。
      await updateDoc(docRef, scoreData);
    } catch (error) {
      console.error('Error updating daily score:', error);
      throw new Error('無法更新每日分數');
    }
  }
}

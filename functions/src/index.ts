/**
 * Firebase Functions
 * 
 * 這個文件包含了 Firebase Cloud Functions
 * 主要用於自動每日增加分數和其他後端邏輯
 */

import { onSchedule } from 'firebase-functions/v2/scheduler';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

// 初始化 Firebase Admin SDK
initializeApp();
const db = getFirestore();

/**
 * 每日自動增加分數的定時函數
 * 每天午夜執行，根據系統設定自動增加分數
 */
export const dailyScoreIncrement = onSchedule(
  {
    schedule: '0 0 * * *', // 每天午夜執行
    timeZone: 'Asia/Taipei', // 台北時區
  },
  async () => {
    // event parameter removed as it's not used in the function
    try {
      console.log('開始執行每日分數增加任務');

      // 獲取系統設定
      const settingsDoc = await db.collection('settings').doc('main').get();
      if (!settingsDoc.exists) {
        console.error('系統設定不存在');
        return;
      }

      const settings = settingsDoc.data();
      const dailyIncrement = settings?.dailyIncrement || 0;

      if (dailyIncrement <= 0) {
        console.log('每日增加分數為 0，跳過執行');
        return;
      }

      // 檢查今天是否已經執行過
      const today = new Date().toISOString().split('T')[0];
      const dailyScoreDoc = await db.collection('dailyScores').doc(today).get();
      
      if (dailyScoreDoc.exists && dailyScoreDoc.data()?.autoIncrement) {
        console.log('今日已執行過自動增加分數，跳過執行');
        return;
      }

      // 新增分數記錄
      await db.collection('scoreRecords').add({
        score: dailyIncrement,
        reason: '每日自動增加',
        type: 'reward',
        timestamp: Timestamp.now()
      });

      // 更新或創建每日分數快照
      const dailyScoreData = {
        date: today,
        autoIncrement: dailyIncrement,
        updatedAt: Timestamp.now()
      };

      if (dailyScoreDoc.exists) {
        await db.collection('dailyScores').doc(today).update(dailyScoreData);
      } else {
        await db.collection('dailyScores').doc(today).set({
          ...dailyScoreData,
          totalScore: 0, // 這個值會在前端計算時更新
          dailyChange: dailyIncrement,
          rewardCount: 1,
          punishmentCount: 0
        });
      }

      console.log(`成功執行每日分數增加：+${dailyIncrement} 分`);
    } catch (error) {
      console.error('每日分數增加任務執行失敗:', error);
    }
  }
);

/**
 * 手動觸發每日分數增加的 HTTP 函數
 * 用於測試或手動執行
 */
export const triggerDailyIncrement = onRequest(
  {
    cors: true,
  },
  async (req, res) => {
    try {
      // 簡單的驗證機制
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: '未授權的請求' });
        return;
      }

      const token = authHeader.split('Bearer ')[1];
      
      // 獲取系統設定來驗證密碼
      const settingsDoc = await db.collection('settings').doc('main').get();
      if (!settingsDoc.exists) {
        res.status(500).json({ error: '系統設定不存在' });
        return;
      }

      const settings = settingsDoc.data();
      if (token !== settings?.adminPassword) {
        res.status(401).json({ error: '密碼錯誤' });
        return;
      }

      // 執行每日增加邏輯（與定時函數相同）
      const dailyIncrement = settings?.dailyIncrement || 0;

      if (dailyIncrement <= 0) {
        res.json({ message: '每日增加分數為 0，無需執行' });
        return;
      }

      // 新增分數記錄
      const docRef = await db.collection('scoreRecords').add({
        score: dailyIncrement,
        reason: '手動觸發每日增加',
        type: 'reward',
        timestamp: Timestamp.now()
      });

      res.json({ 
        message: `成功增加 ${dailyIncrement} 分`,
        recordId: docRef.id
      });

    } catch (error) {
      console.error('手動觸發每日增加失敗:', error);
      res.status(500).json({ error: '執行失敗' });
    }
  }
);

/**
 * 獲取統計資料的 HTTP 函數
 * 提供複雜的統計計算，減輕前端負擔
 */
export const getStatistics = onRequest(
  {
    cors: true,
  },
  async (req, res) => {
    try {
      // 獲取所有分數記錄
      const scoreRecordsSnapshot = await db
        .collection('scoreRecords')
        .orderBy('timestamp', 'desc')
        .get();

      interface ScoreRecord {
        id: string;
        score: number;
        type: 'reward' | 'punishment';
        reason: string;
        timestamp: FirebaseFirestore.Timestamp; // Firestore Timestamp
      }

      const records: ScoreRecord[] = scoreRecordsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ScoreRecord));

      if (records.length === 0) {
        res.json({
          totalScore: 0,
          recordCount: 0,
          rewardCount: 0,
          punishmentCount: 0
        });
        return;
      }

      // 計算統計資料
      const totalScore = records.reduce((sum: number, record: ScoreRecord) => sum + record.score, 0);
      const rewardRecords = records.filter((record: ScoreRecord) => record.type === 'reward');
      const punishmentRecords = records.filter((record: ScoreRecord) => record.type === 'punishment');

      const statistics = {
        totalScore,
        recordCount: records.length,
        rewardCount: rewardRecords.length,
        punishmentCount: punishmentRecords.length,
        rewardSum: rewardRecords.reduce((sum: number, record: ScoreRecord) => sum + record.score, 0),
        punishmentSum: punishmentRecords.reduce((sum: number, record: ScoreRecord) => sum + record.score, 0),
        averageScore: totalScore / records.length,
        lastUpdated: new Date().toISOString()
      };

      res.json(statistics);

    } catch (error) {
      console.error('獲取統計資料失敗:', error);
      res.status(500).json({ error: '獲取統計資料失敗' });
    }
  }
);

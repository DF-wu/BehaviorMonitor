/**
 * Firebase 配置文件
 * 
 * 這個文件包含了 Firebase 的初始化配置和服務實例
 * 用於連接到 Firebase Firestore 資料庫和其他 Firebase 服務
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase 配置對象
// 這些配置來自 Firebase Console 中的專案設定
const firebaseConfig = {
  apiKey: "AIzaSyAsB-bA-FEvi9hrap1yYR6NKcVtf29gyCE",
  authDomain: "behaviormonitor-36a53.firebaseapp.com",
  projectId: "behaviormonitor-36a53",
  storageBucket: "behaviormonitor-36a53.firebasestorage.app",
  messagingSenderId: "151222759826",
  appId: "1:151222759826:web:bbb482def199e8ce92d14b",
  measurementId: "G-TGY6EGNK2M"
};

// 初始化 Firebase 應用程式
const app = initializeApp(firebaseConfig);

// 初始化 Firestore 資料庫
// Firestore 是 Firebase 的 NoSQL 文件資料庫
export const db = getFirestore(app);

// 初始化 Analytics（可選）
// 用於追蹤應用程式使用情況
export const analytics = getAnalytics(app);

// 導出 Firebase 應用程式實例
export default app;

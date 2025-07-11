/**
 * 應用程式入口點
 *
 * 這個文件是 React 應用程式的主要入口點
 * 負責將 App 組件掛載到 DOM 上
 */

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 創建 React 根節點並渲染應用程式
createRoot(document.getElementById('root')!).render(<App />)

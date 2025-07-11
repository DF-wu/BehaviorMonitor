/**
 * 主應用程式組件
 *
 * 這是應用程式的根組件，負責：
 * 1. 提供全域狀態管理 (AppProvider)
 * 2. 根據管理員模式狀態切換不同的視圖
 * 3. 配置 Ant Design 的全域樣式
 */

import React from 'react';
import { ConfigProvider } from 'antd';
import zhTW from 'antd/locale/zh_TW';
import { AppProvider } from './context/AppContext';
import { useApp } from './hooks/useApp';
import PublicView from './components/PublicView';
import AdminView from './components/AdminView';
import './App.css';

/**
 * 主要應用程式內容組件
 * 根據管理員模式狀態決定顯示哪個視圖
 */
const AppContent: React.FC = () => {
  const { state } = useApp();

  // 根據管理員模式狀態切換視圖
  return state.isAdminMode ? <AdminView /> : <PublicView />;
};

/**
 * 根應用程式組件
 * 包裝了狀態管理和國際化配置
 */
function App() {
  return (
    <ConfigProvider
      locale={zhTW}
      theme={{
        token: {
          // 自定義主題色彩
          colorPrimary: '#1890ff',
          borderRadius: 6,
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
        },
        components: {
          // 自定義組件樣式
          Card: {
            borderRadius: 8,
          },
          Button: {
            borderRadius: 6,
          },
        },
      }}
    >
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ConfigProvider>
  );
}

export default App;

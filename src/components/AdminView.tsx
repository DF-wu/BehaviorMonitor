/**
 * 管理介面組件
 * 
 * 提供管理員所有功能的單頁介面，包括：
 * - 快速操作（新增/扣除分數）
 * - 統計圖表
 * - 系統設定
 */

import React, { useState } from 'react';
import { 
  Layout, 
  Card, 
  Tabs, 
  Button, 
  Space, 
  Typography, 
  FloatButton,
  Divider
} from 'antd';
import {
  LogoutOutlined,
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
  PlusOutlined
  // MinusOutlined - removed unused import
} from '@ant-design/icons';
import { useApp } from '../hooks/useApp';
import QuickActions from './admin/QuickActions';
import StatisticsPanel from './admin/StatisticsPanel';
import SettingsPanel from './admin/SettingsPanel';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

/**
 * 管理介面的頁籤項目配置
 */
const getTabItems = () => [
  {
    key: 'actions',
    label: (
      <Space>
        <PlusOutlined />
        快速操作
      </Space>
    ),
    children: <QuickActions />
  },
  {
    key: 'statistics',
    label: (
      <Space>
        <BarChartOutlined />
        統計圖表
      </Space>
    ),
    children: <StatisticsPanel />
  },
  {
    key: 'settings',
    label: (
      <Space>
        <SettingOutlined />
        系統設定
      </Space>
    ),
    children: <SettingsPanel />
  }
];

const AdminView: React.FC = () => {
  const { state, exitAdminMode } = useApp();
  const [activeTab, setActiveTab] = useState('actions');
  
  const { currentScore, statistics } = state;

  /**
   * 處理退出管理模式
   */
  const handleLogout = () => {
    exitAdminMode();
  };

  /**
   * 根據分數返回對應的狀態顏色
   */
  const getScoreStatus = (score: number) => {
    if (score >= 80) return { color: '#52c41a', status: '優秀' };
    if (score >= 40) return { color: '#1890ff', status: '普通' };
    return { color: '#ff4d4f', status: '需改進' };
  };

  const scoreStatus = getScoreStatus(currentScore);

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      {/* 頂部標題欄 */}
      <Header 
        style={{ 
          backgroundColor: '#001529',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Space>
          <DashboardOutlined style={{ color: '#fff', fontSize: '20px' }} />
          <Title level={3} style={{ color: '#fff', margin: 0 }}>
            行為監控管理介面
          </Title>
        </Space>
        
        <Space>
          <Text style={{ color: '#fff' }}>
            目前分數: 
            <span style={{ 
              color: scoreStatus.color, 
              fontWeight: 'bold',
              fontSize: '18px',
              marginLeft: '8px'
            }}>
              {currentScore}
            </span>
          </Text>
          <Button 
            type="primary" 
            danger 
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            退出管理
          </Button>
        </Space>
      </Header>

      {/* 主要內容區域 */}
      <Content style={{ padding: '24px' }}>
        {/* 概覽卡片 */}
        <Card
          style={{ marginBottom: '24px' }}
          styles={{ body: { padding: '16px 24px' } }}
        >
          <Space size="large" style={{ width: '100%', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <Title level={2} style={{ margin: 0, color: scoreStatus.color }}>
                {currentScore}
              </Title>
              <Text type="secondary">目前總分</Text>
            </div>
            
            <Divider type="vertical" style={{ height: '60px' }} />
            
            <div style={{ textAlign: 'center' }}>
              <Title level={4} style={{ margin: 0, color: scoreStatus.color }}>
                {scoreStatus.status}
              </Title>
              <Text type="secondary">表現狀態</Text>
            </div>
            
            {statistics && (
              <>
                <Divider type="vertical" style={{ height: '60px' }} />
                
                <div style={{ textAlign: 'center' }}>
                  <Title level={4} style={{ margin: 0, color: '#52c41a' }}>
                    {statistics.totalRewards}
                  </Title>
                  <Text type="secondary">獎勵次數</Text>
                </div>
                
                <Divider type="vertical" style={{ height: '60px' }} />
                
                <div style={{ textAlign: 'center' }}>
                  <Title level={4} style={{ margin: 0, color: '#ff4d4f' }}>
                    {statistics.totalPunishments}
                  </Title>
                  <Text type="secondary">懲罰次數</Text>
                </div>
              </>
            )}
          </Space>
        </Card>

        {/* 功能頁籤 */}
        <Card>
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={getTabItems()}
            size="large"
            tabBarStyle={{ marginBottom: '24px' }}
          />
        </Card>
      </Content>

      {/* 浮動按鈕 - 快速退出 */}
      <FloatButton
        icon={<LogoutOutlined />}
        tooltip="退出管理模式"
        onClick={handleLogout}
        style={{
          right: 24,
          bottom: 24,
          backgroundColor: '#ff4d4f', // Manual danger styling since danger prop doesn't exist
          color: '#fff'
        }}
        type="primary"
      />
    </Layout>
  );
};

export default AdminView;

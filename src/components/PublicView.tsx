/**
 * 公開頁面組件
 * 
 * 這是應用程式的主要公開介面，顯示目前分數和歷史記錄
 * 不需要登入即可查看，是弟弟主要使用的頁面
 */

import React, { useState } from 'react';
import { Card, List, Typography, Space, Tag, FloatButton } from 'antd';
import { SettingOutlined, TrophyOutlined, WarningOutlined } from '@ant-design/icons';
import { useApp } from '../hooks/useApp';
import type { ScoreRecord } from '../types';
import AdminLoginModal from './AdminLoginModal';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';

// 設定 dayjs 為繁體中文
dayjs.locale('zh-tw');

const { Title, Text } = Typography;

/**
 * 根據分數返回對應的背景顏色
 * @param score 目前分數
 * @returns CSS 顏色值
 */
const getBackgroundColor = (score: number): string => {
  if (score >= 80) return '#d4edda'; // 綠色 - 表現優秀
  if (score >= 40) return '#cce5ff'; // 藍色 - 表現普通
  return '#f8d7da'; // 紅色 - 需要改進
};

/**
 * 根據分數返回對應的文字顏色
 * @param score 目前分數
 * @returns CSS 顏色值
 */
const getTextColor = (score: number): string => {
  if (score >= 80) return '#155724'; // 深綠色
  if (score >= 40) return '#004085'; // 深藍色
  return '#721c24'; // 深紅色
};

/**
 * 格式化分數記錄項目
 * @param record 分數記錄
 * @returns JSX 元素
 */
const renderScoreRecord = (record: ScoreRecord) => {
  const isReward = record.type === 'reward';
  const scoreColor = isReward ? '#52c41a' : '#ff4d4f';
  const icon = isReward ? <TrophyOutlined /> : <WarningOutlined />;
  
  return (
    <List.Item>
      <Card 
        size="small" 
        style={{ 
          width: '100%',
          borderLeft: `4px solid ${scoreColor}`,
          backgroundColor: isReward ? '#f6ffed' : '#fff2f0'
        }}
      >
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Space>
            {icon}
            <Tag color={isReward ? 'green' : 'red'}>
              {isReward ? '+' : ''}{record.score} 分
            </Tag>
            <Text type="secondary">
              {dayjs(record.timestamp).format('YYYY-MM-DD HH:mm')}
            </Text>
          </Space>
          <Text>{record.reason}</Text>
        </Space>
      </Card>
    </List.Item>
  );
};

const PublicView: React.FC = () => {
  const { state } = useApp();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  
  const { currentScore, scoreRecords, loading } = state;
  
  // 計算最後更新時間
  const lastUpdateTime = scoreRecords.length > 0 
    ? dayjs(scoreRecords[0].timestamp).format('YYYY-MM-DD HH:mm')
    : '尚無記錄';

  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundColor: getBackgroundColor(currentScore),
        padding: '20px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* 主要分數顯示區域 */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title 
          level={1} 
          style={{ 
            fontSize: '4rem',
            margin: '20px 0',
            color: getTextColor(currentScore),
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {currentScore}
        </Title>
        <Title 
          level={2} 
          style={{ 
            color: getTextColor(currentScore),
            marginBottom: '10px'
          }}
        >
          目前表現分數
        </Title>
        <Text 
          type="secondary" 
          style={{ 
            fontSize: '16px',
            color: getTextColor(currentScore)
          }}
        >
          最後更新時間: {lastUpdateTime}
        </Text>
      </div>

      {/* 分數記錄列表 */}
      <Card 
        title={
          <Space>
            <TrophyOutlined />
            <span>表現記錄</span>
            <Tag color="blue">{scoreRecords.length} 筆記錄</Tag>
          </Space>
        }
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        {scoreRecords.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <TrophyOutlined style={{ fontSize: '48px', color: '#d9d9d9' }} />
            <Title level={4} type="secondary">尚無表現記錄</Title>
            <Text type="secondary">開始你的表現記錄吧！</Text>
          </div>
        ) : (
          <List
            dataSource={scoreRecords.slice(0, 20)} // 只顯示最新的 20 筆記錄
            renderItem={renderScoreRecord}
            loading={loading}
            style={{ maxHeight: '600px', overflowY: 'auto' }}
          />
        )}
      </Card>

      {/* 管理員入口浮動按鈕 */}
      <FloatButton
        icon={<SettingOutlined />}
        tooltip="管理介面"
        onClick={() => setIsLoginModalVisible(true)}
        style={{
          right: 24,
          bottom: 24,
        }}
      />

      {/* 管理員登入彈窗 */}
      <AdminLoginModal
        visible={isLoginModalVisible}
        onCancel={() => setIsLoginModalVisible(false)}
        onSuccess={() => setIsLoginModalVisible(false)}
      />
    </div>
  );
};

export default PublicView;

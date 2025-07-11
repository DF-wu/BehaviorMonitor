/**
 * 公開頁面組件
 * 
 * 這是應用程式的主要公開介面，顯示目前分數和歷史記錄
 * 不需要登入即可查看，是弟弟主要使用的頁面
 */

import React, { useState, useMemo } from 'react';
import { Card, List, Typography, Space, Tag, FloatButton, Tabs, Row, Col, Statistic } from 'antd';
import {
  SettingOutlined,
  TrophyOutlined,
  WarningOutlined,
  BarChartOutlined,
  LineChartOutlined,
  DotChartOutlined
} from '@ant-design/icons';
import { Line, Column, Heatmap } from '@ant-design/charts';
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
 * 顯示頁面標題
 * @returns JSX 元素
 */

const ShowPageTitle = () => (
  <Title
    level={2}
    style={{
      textAlign: 'center',
      marginBottom: '20px'
    }}
  >
    豬腳分數
  </Title>
);


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

  // 計算統計數據
  const chartData = useMemo(() => {
    if (!scoreRecords.length) return { trendData: [], heatmapData: [], dailyData: [] };

    // 趨勢分析數據 - 累積分數變化
    const trendData = scoreRecords
      .slice()
      .reverse() // 按時間順序排列
      .reduce((acc, record, index) => {
        const prevTotal = index > 0 ? acc[index - 1].total : 0;
        const newTotal = prevTotal + record.score;
        acc.push({
          date: dayjs(record.timestamp).format('MM-DD'),
          score: record.score,
          total: newTotal,
          type: record.type === 'reward' ? '獎勵' : '懲罰'
        });
        return acc;
      }, [] as Array<{
        date: string;
        score: number;
        total: number;
        type: string;
      }>);

    // 每日統計數據
    const dailyStats = scoreRecords.reduce((acc, record) => {
      const date = dayjs(record.timestamp).format('YYYY-MM-DD');
      if (!acc[date]) {
        acc[date] = { date, rewards: 0, punishments: 0, total: 0 };
      }
      if (record.type === 'reward') {
        acc[date].rewards += record.score;
      } else {
        acc[date].punishments += Math.abs(record.score);
      }
      acc[date].total += record.score;
      return acc;
    }, {} as Record<string, {
      date: string;
      rewards: number;
      punishments: number;
      total: number;
    }>);

    const dailyData = Object.values(dailyStats)
      .sort((a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf())
      .slice(-14); // 最近14天

    // 熱力圖數據 - 一週內每小時的活動分佈
    const heatmapData = scoreRecords
      .filter(record => dayjs().diff(dayjs(record.timestamp), 'day') <= 7)
      .reduce((acc, record) => {
        const hour = dayjs(record.timestamp).hour();
        const day = dayjs(record.timestamp).format('dddd');
        const key = `${day}-${hour}`;
        if (!acc[key]) {
          acc[key] = { day, hour, count: 0, score: 0 };
        }
        acc[key].count += 1;
        acc[key].score += Math.abs(record.score);
        return acc;
      }, {} as Record<string, {
        day: string;
        hour: number;
        count: number;
        score: number;
      }>);

    return {
      trendData,
      dailyData,
      heatmapData: Object.values(heatmapData)
    };
  }, [scoreRecords]);
  
  // 計算最後更新時間
  const lastUpdateTime = scoreRecords.length > 0
    ? dayjs(scoreRecords[0].timestamp).format('YYYY-MM-DD HH:mm')
    : '尚無記錄';

  // 渲染趨勢分析圖表
  const renderTrendChart = () => {
    if (!chartData.trendData.length) {
      return <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>暫無數據</div>;
    }

    const config = {
      data: chartData.trendData,
      xField: 'date',
      yField: 'total',
      seriesField: 'type',
      smooth: true,
      animation: {
        appear: {
          animation: 'path-in',
          duration: 1000,
        },
      },
      color: ['#52c41a', '#ff4d4f'],
      point: {
        size: 4,
        shape: 'circle',
      },
      tooltip: {
        formatter: (datum: { type: string; score: number; total: number }) => {
          return {
            name: datum.type,
            value: `${datum.score > 0 ? '+' : ''}${datum.score} 分 (累計: ${datum.total})`
          };
        },
      },
    };

    return <Line {...config} />;
  };

  // 渲染每日統計柱狀圖
  const renderDailyChart = () => {
    if (!chartData.dailyData.length) {
      return <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>暫無數據</div>;
    }

    const data = chartData.dailyData.flatMap((item: {
      date: string;
      rewards: number;
      punishments: number;
    }) => [
      { date: dayjs(item.date).format('MM-DD'), type: '獎勵', value: item.rewards },
      { date: dayjs(item.date).format('MM-DD'), type: '懲罰', value: item.punishments }
    ]);

    const config = {
      data,
      xField: 'date',
      yField: 'value',
      seriesField: 'type',
      isGroup: true,
      color: ['#52c41a', '#ff4d4f'],
      columnStyle: {
        radius: [4, 4, 0, 0],
      },
      tooltip: {
        formatter: (datum: { type: string; value: number }) => {
          return {
            name: datum.type,
            value: `${datum.value} 分`
          };
        },
      },
    };

    return <Column {...config} />;
  };

  // 渲染活動熱力圖
  const renderHeatmapChart = () => {
    if (!chartData.heatmapData.length) {
      return <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>暫無數據</div>;
    }

    const config = {
      data: chartData.heatmapData,
      xField: 'hour',
      yField: 'day',
      colorField: 'count',
      color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
      tooltip: {
        formatter: (datum: { count: number; score: number }) => {
          return {
            name: '活動次數',
            value: `${datum.count} 次 (${datum.score} 分)`
          };
        },
      },
      xAxis: {
        title: {
          text: '小時',
        },
      },
      yAxis: {
        title: {
          text: '星期',
        },
      },
    };

    return <Heatmap {...config} />;
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundColor: getBackgroundColor(currentScore),
        padding: '20px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* 頁面標題 */}
      {ShowPageTitle()}

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

      {/* 統計分析區域 */}
      {scoreRecords.length > 0 && (
        <div style={{ maxWidth: '1200px', margin: '0 auto 40px auto' }}>
          <Tabs
            defaultActiveKey="stats"
            items={[
              {
                key: 'stats',
                label: (
                  <Space>
                    <TrophyOutlined />
                    統計摘要
                  </Space>
                ),
                children: (
                  <Card
                    title="統計摘要"
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  >
                    <Row gutter={16}>
                      <Col xs={12} sm={6}>
                        <Statistic
                          title="總記錄數"
                          value={scoreRecords.length}
                          suffix="筆"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Statistic
                          title="獎勵次數"
                          value={scoreRecords.filter(r => r.type === 'reward').length}
                          valueStyle={{ color: '#52c41a' }}
                          suffix="次"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Statistic
                          title="懲罰次數"
                          value={scoreRecords.filter(r => r.type === 'punishment').length}
                          valueStyle={{ color: '#ff4d4f' }}
                          suffix="次"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Statistic
                          title="平均分數"
                          value={Math.round(scoreRecords.reduce((sum, r) => sum + r.score, 0) / scoreRecords.length * 100) / 100}
                          precision={1}
                          suffix="分"
                        />
                      </Col>
                    </Row>
                  </Card>
                ),
              },
              {
                key: 'trend',
                label: (
                  <Space>
                    <LineChartOutlined />
                    趨勢分析
                  </Space>
                ),
                children: (
                  <Card
                    title="分數趨勢變化"
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ height: '300px' }}>
                      {renderTrendChart()}
                    </div>
                  </Card>
                ),
              },
              {
                key: 'daily',
                label: (
                  <Space>
                    <BarChartOutlined />
                    每日統計
                  </Space>
                ),
                children: (
                  <Card
                    title="每日獎懲統計 (最近14天)"
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ height: '300px' }}>
                      {renderDailyChart()}
                    </div>
                  </Card>
                ),
              },
              {
                key: 'heatmap',
                label: (
                  <Space>
                    <DotChartOutlined />
                    活動熱力圖
                  </Space>
                ),
                children: (
                  <Card
                    title="一週活動分佈熱力圖"
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ height: '300px' }}>
                      {renderHeatmapChart()}
                    </div>
                  </Card>
                ),
              },
            ]}
          />
        </div>
      )}

      {/* 分數記錄列表 */}
      <Card
        title={
          <Space>
            <TrophyOutlined />
            <span>最新記錄</span>
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
            dataSource={scoreRecords.slice(0, 10)} // 只顯示最新的 10 筆記錄
            renderItem={renderScoreRecord}
            loading={loading}
            style={{ maxHeight: '400px', overflowY: 'auto' }}
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

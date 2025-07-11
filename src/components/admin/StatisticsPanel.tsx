/**
 * 統計圖表面板組件
 * 
 * 提供各種統計圖表和數據分析功能：
 * - 時間範圍選擇
 * - 趨勢圖表
 * - 統計指標
 * - 分佈圖表
 */

import React, { useState, useMemo } from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  Space,
  Statistic,
  Typography,
  DatePicker
  // Select, - removed unused import
  // Spin - removed unused import
} from 'antd';
import {
  LineChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  // CalendarOutlined, - removed unused import
  TrophyOutlined,
  WarningOutlined
} from '@ant-design/icons';
import { Line, Column, Pie } from '@ant-design/charts';
import { useApp } from '../../hooks/useApp';
import type { TimeRange } from '../../types';
// ChartDataPoint - removed unused import
import dayjs from 'dayjs';

const { Text } = Typography;
// Title - removed unused destructuring
const { RangePicker } = DatePicker;

/**
 * Time range options configuration
 * 時間範圍選項配置，提供預設的時間範圍選擇
 */
const TIME_RANGE_OPTIONS = [
  { label: '最近 7 天', value: '7days' as TimeRange },
  { label: '最近 30 天', value: '30days' as TimeRange },
  { label: '本月', value: 'thisMonth' as TimeRange },
  { label: '最近 6 個月', value: '6months' as TimeRange },
];

const StatisticsPanel: React.FC = () => {
  const { state } = useApp();
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>('30days');
  const [customDateRange, setCustomDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);
  // loading, setLoading - removed unused state variables

  const { scoreRecords } = state;
  // statistics - removed unused destructuring

  /**
   * 根據時間範圍過濾分數記錄
   */
  const filteredRecords = useMemo(() => {
    if (!scoreRecords.length) return [];

    let startDate: dayjs.Dayjs;
    const endDate = dayjs();

    // 如果有自定義日期範圍，使用自定義範圍
    if (customDateRange) {
      return scoreRecords.filter(record => {
        const recordDate = dayjs(record.timestamp);
        return recordDate.isAfter(customDateRange[0]) && recordDate.isBefore(customDateRange[1]);
      });
    }

    // 根據選擇的時間範圍設定開始日期
    switch (selectedTimeRange) {
      case '7days':
        startDate = endDate.subtract(7, 'day');
        break;
      case '30days':
        startDate = endDate.subtract(30, 'day');
        break;
      case 'thisMonth':
        startDate = endDate.startOf('month');
        break;
      case '6months':
        startDate = endDate.subtract(6, 'month');
        break;
      default:
        startDate = endDate.subtract(30, 'day');
    }

    return scoreRecords.filter(record => {
      const recordDate = dayjs(record.timestamp);
      return recordDate.isAfter(startDate) && recordDate.isBefore(endDate);
    });
  }, [scoreRecords, selectedTimeRange, customDateRange]);

  /**
   * 計算趨勢圖表資料
   */
  const trendChartData = useMemo(() => {
    if (!filteredRecords.length) return [];

    // 按日期分組計算每日累積分數
    const dailyScores = new Map<string, number>();
    let cumulativeScore = 0;

    // 先計算基礎分數（所有記錄的累積）
    const allRecordsBeforeRange = scoreRecords.filter(record => {
      const recordDate = dayjs(record.timestamp);
      const rangeStart = customDateRange 
        ? customDateRange[0] 
        : dayjs().subtract(selectedTimeRange === '7days' ? 7 : selectedTimeRange === '30days' ? 30 : selectedTimeRange === 'thisMonth' ? dayjs().date() : 180, 'day');
      return recordDate.isBefore(rangeStart);
    });

    const baseScore = allRecordsBeforeRange.reduce((sum, record) => sum + record.score, 0);
    cumulativeScore = baseScore;

    // 計算範圍內每日的累積分數
    filteredRecords
      .sort((a, b) => dayjs(a.timestamp).valueOf() - dayjs(b.timestamp).valueOf())
      .forEach(record => {
        cumulativeScore += record.score;
        const dateKey = dayjs(record.timestamp).format('YYYY-MM-DD');
        dailyScores.set(dateKey, cumulativeScore);
      });

    return Array.from(dailyScores.entries()).map(([date, score]) => ({
      date,
      value: score,
      label: `${score} 分`
    }));
  }, [filteredRecords, scoreRecords, selectedTimeRange, customDateRange]);

  /**
   * 計算每日變化圖表資料
   */
  const dailyChangeData = useMemo(() => {
    if (!filteredRecords.length) return [];

    const dailyChanges = new Map<string, number>();

    filteredRecords.forEach(record => {
      const dateKey = dayjs(record.timestamp).format('YYYY-MM-DD');
      const currentChange = dailyChanges.get(dateKey) || 0;
      dailyChanges.set(dateKey, currentChange + record.score);
    });

    return Array.from(dailyChanges.entries()).map(([date, change]) => ({
      date,
      value: change,
      type: change >= 0 ? '正向' : '負向'
    }));
  }, [filteredRecords]);

  /**
   * 計算獎懲分佈資料
   */
  const distributionData = useMemo(() => {
    if (!filteredRecords.length) return [];

    const rewardCount = filteredRecords.filter(r => r.type === 'reward').length;
    const punishmentCount = filteredRecords.filter(r => r.type === 'punishment').length;

    return [
      { type: '獎勵', value: rewardCount },
      { type: '懲罰', value: punishmentCount }
    ];
  }, [filteredRecords]);

  /**
   * 計算期間統計資料
   */
  const periodStatistics = useMemo(() => {
    if (!filteredRecords.length) return null;

    const rewardRecords = filteredRecords.filter(r => r.type === 'reward');
    const punishmentRecords = filteredRecords.filter(r => r.type === 'punishment');
    const totalChange = filteredRecords.reduce((sum, r) => sum + r.score, 0);

    return {
      totalRecords: filteredRecords.length,
      totalChange,
      rewardCount: rewardRecords.length,
      punishmentCount: punishmentRecords.length,
      rewardSum: rewardRecords.reduce((sum, r) => sum + r.score, 0),
      punishmentSum: punishmentRecords.reduce((sum, r) => sum + r.score, 0),
      averageChange: totalChange / filteredRecords.length,
    };
  }, [filteredRecords]);

  /**
   * 趨勢圖表配置
   */
  const trendChartConfig = {
    data: trendChartData,
    xField: 'date',
    yField: 'value',
    point: {
      size: 4,
      shape: 'circle',
    },
    line: {
      color: '#1890ff',
      size: 2,
    },
    tooltip: {
      formatter: (datum: { value: number }) => ({
        name: '累積分數',
        value: `${datum.value} 分`,
      }),
    },
    xAxis: {
      type: 'time',
      tickCount: 5,
    },
    yAxis: {
      label: {
        formatter: (v: string) => `${v} 分`,
      },
    },
  };

  /**
   * 每日變化圖表配置
   */
  const dailyChangeConfig = {
    data: dailyChangeData,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    color: ['#52c41a', '#ff4d4f'],
    columnWidthRatio: 0.8,
    tooltip: {
      formatter: (datum: { value: number }) => ({
        name: '當日變化',
        value: `${datum.value > 0 ? '+' : ''}${datum.value} 分`,
      }),
    },
  };

  /**
   * 分佈圖表配置
   */
  const distributionConfig = {
    data: distributionData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    color: ['#52c41a', '#ff4d4f'],
    label: {
      type: 'outer',
      content: '{name}: {percentage}',
    },
    tooltip: {
      formatter: (datum: { type: string; value: number }) => ({
        name: datum.type,
        value: `${datum.value} 次`,
      }),
    },
  };

  return (
    <div>
      {/* 時間範圍選擇器 */}
      <Card size="small" style={{ marginBottom: '24px' }}>
        <Space wrap>
          <Text strong>時間範圍：</Text>
          {TIME_RANGE_OPTIONS.map(option => (
            <Button
              key={option.value}
              type={selectedTimeRange === option.value ? 'primary' : 'default'}
              onClick={() => {
                setSelectedTimeRange(option.value);
                setCustomDateRange(null);
              }}
            >
              {option.label}
            </Button>
          ))}
          <RangePicker
            placeholder={['開始日期', '結束日期']}
            onChange={(dates) => {
              if (dates) {
                setCustomDateRange([dates[0]!, dates[1]!]);
                setSelectedTimeRange('30days'); // 重置預設選擇
              } else {
                setCustomDateRange(null);
              }
            }}
            value={customDateRange}
          />
        </Space>
      </Card>

      {/* 統計指標卡片 */}
      {periodStatistics && (
        <Row gutter={16} style={{ marginBottom: '24px' }}>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="期間總變化"
                value={periodStatistics.totalChange}
                suffix="分"
                valueStyle={{ 
                  color: periodStatistics.totalChange >= 0 ? '#3f8600' : '#cf1322' 
                }}
                prefix={periodStatistics.totalChange >= 0 ? <TrophyOutlined /> : <WarningOutlined />}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="記錄總數"
                value={periodStatistics.totalRecords}
                suffix="筆"
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="獎勵次數"
                value={periodStatistics.rewardCount}
                suffix="次"
                valueStyle={{ color: '#52c41a' }}
                prefix={<TrophyOutlined />}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="懲罰次數"
                value={periodStatistics.punishmentCount}
                suffix="次"
                valueStyle={{ color: '#ff4d4f' }}
                prefix={<WarningOutlined />}
              />
            </Card>
          </Col>
        </Row>
      )}

      {/* 圖表區域 */}
      <Row gutter={16}>
        {/* 趨勢圖 */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <Space>
                <LineChartOutlined />
                分數趨勢圖
              </Space>
            }
            style={{ marginBottom: '16px' }}
          >
            {trendChartData.length > 0 ? (
              <Line {...trendChartConfig} height={300} />
            ) : (
              <div style={{ textAlign: 'center', padding: '60px' }}>
                <Text type="secondary">暫無資料</Text>
              </div>
            )}
          </Card>
        </Col>

        {/* 每日變化圖 */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <Space>
                <BarChartOutlined />
                每日變化圖
              </Space>
            }
            style={{ marginBottom: '16px' }}
          >
            {dailyChangeData.length > 0 ? (
              <Column {...dailyChangeConfig} height={300} />
            ) : (
              <div style={{ textAlign: 'center', padding: '60px' }}>
                <Text type="secondary">暫無資料</Text>
              </div>
            )}
          </Card>
        </Col>

        {/* 獎懲分佈圖 */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <Space>
                <PieChartOutlined />
                獎懲分佈圖
              </Space>
            }
          >
            {distributionData.length > 0 && distributionData.some(d => d.value > 0) ? (
              <Pie {...distributionConfig} height={300} />
            ) : (
              <div style={{ textAlign: 'center', padding: '60px' }}>
                <Text type="secondary">暫無資料</Text>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StatisticsPanel;

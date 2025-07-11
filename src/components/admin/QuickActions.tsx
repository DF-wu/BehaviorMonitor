/**
 * 快速操作組件
 * 
 * 提供管理員快速新增或扣除分數的介面
 * 包括預設的快速按鈕和自定義輸入功能
 */

import React, { useState } from 'react';
import {
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  Row,
  Col,
  Typography,
  Divider,
  Tag
  // message - removed unused import, using message from useApp context instead
} from 'antd';
import {
  // PlusOutlined, - removed unused import
  // MinusOutlined, - removed unused import
  TrophyOutlined,
  WarningOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import { useApp } from '../../hooks/useApp';

const { Title, Text } = Typography;
const { TextArea } = Input;

/**
 * 預設的快速操作按鈕配置
 * Default quick action button configurations (no limits)
 */
const QUICK_ACTIONS = {
  rewards: [
    { score: 5, reason: '完成作業', color: '#52c41a' },
    { score: 10, reason: '主動幫忙家務', color: '#1890ff' },
    { score: 25, reason: '表現優秀', color: '#722ed1' },
    { score: 50, reason: '特別優秀表現', color: '#eb2f96' },
    { score: 100, reason: '傑出成就', color: '#f759ab' },
    { score: 200, reason: '重大成就', color: '#13c2c2' }
  ],
  punishments: [
    { score: -5, reason: '忘記做某件事', color: '#fa8c16' },
    { score: -10, reason: '不聽話', color: '#fa541c' },
    { score: -25, reason: '犯錯誤', color: '#ff4d4f' },
    { score: -50, reason: '嚴重違規', color: '#ff7875' },
    { score: -100, reason: '重大違規', color: '#ff4d4f' },
    { score: -200, reason: '極嚴重違規', color: '#cf1322' }
  ]
};

const QuickActions: React.FC = () => {
  const { addScore, state } = useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [customScore, setCustomScore] = useState<number>(0);
  const [customReason, setCustomReason] = useState<string>('');
  const [selectedType, setSelectedType] = useState<'reward' | 'punishment'>('reward');

  /**
   * 處理快速操作按鈕點擊
   * @param score 分數變動量
   * @param reason 變動原因
   */
  const handleQuickAction = async (score: number, reason: string) => {
    try {
      setLoading(true);
      await addScore(score, reason);
    } catch (error) {
      console.error('Quick action error:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle custom action form submission
   * 處理自定義操作表單提交，根據選擇的類型調整分數正負值
   * @param values 表單值
   */
  const handleCustomAction = async (values: { score: number; reason: string }) => {
    try {
      setLoading(true);
      const finalScore = selectedType === 'punishment' ? -Math.abs(values.score) : Math.abs(values.score);
      await addScore(finalScore, values.reason);
      form.resetFields();
      setCustomScore(0);
      setCustomReason('');
      setSelectedType('reward'); // Reset to default
    } catch (error) {
      console.error('Custom action error:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * 渲染快速操作按鈕
   * @param actions 操作配置數組
   * @param type 操作類型
   */
  const renderQuickButtons = (actions: typeof QUICK_ACTIONS.rewards, type: 'reward' | 'punishment') => {
    const icon = type === 'reward' ? <TrophyOutlined /> : <WarningOutlined />;
    
    return (
      <Row gutter={[8, 8]}>
        {actions.map((action, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index}>
            <Button
              type={type === 'reward' ? 'primary' : 'default'}
              danger={type === 'punishment'}
              icon={icon}
              onClick={() => handleQuickAction(action.score, action.reason)}
              loading={loading}
              block
              style={{
                height: 'auto',
                padding: '8px 4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px'
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                {action.score > 0 ? '+' : ''}{action.score}
              </div>
              <div style={{ fontSize: '10px', textAlign: 'center', lineHeight: '1.2' }}>
                {action.reason}
              </div>
            </Button>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div>
      {/* 目前分數顯示 */}
      <Card 
        size="small" 
        style={{ marginBottom: '24px', textAlign: 'center' }}
      >
        <Space size="large">
          <div>
            <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
              {state.currentScore}
            </Title>
            <Text type="secondary">目前總分</Text>
          </div>
          <Divider type="vertical" style={{ height: '40px' }} />
          <div>
            <Text type="secondary">最近操作將立即生效</Text>
          </div>
        </Space>
      </Card>

      <Row gutter={24}>
        {/* 獎勵操作 */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <Space>
                <TrophyOutlined style={{ color: '#52c41a' }} />
                <span>獎勵操作</span>
                <Tag color="green">增加分數</Tag>
              </Space>
            }
            style={{ marginBottom: '24px' }}
          >
            {renderQuickButtons(QUICK_ACTIONS.rewards, 'reward')}
          </Card>
        </Col>

        {/* 懲罰操作 */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <Space>
                <WarningOutlined style={{ color: '#ff4d4f' }} />
                <span>懲罰操作</span>
                <Tag color="red">扣除分數</Tag>
              </Space>
            }
            style={{ marginBottom: '24px' }}
          >
            {renderQuickButtons(QUICK_ACTIONS.punishments, 'punishment')}
          </Card>
        </Col>
      </Row>

      {/* 自定義操作 */}
      <Card 
        title={
          <Space>
            <ThunderboltOutlined style={{ color: '#722ed1' }} />
            <span>自定義操作</span>
            <Tag color="purple">靈活設定</Tag>
          </Space>
        }
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCustomAction}
          initialValues={{ type: 'reward', score: 1 }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Form.Item
                name="score"
                label="分數數量"
                rules={[
                  { required: true, message: '請輸入分數' },
                  { type: 'number', min: 1, message: '分數必須大於 0' }
                ]}
              >
                <InputNumber
                  min={1}
                  placeholder="輸入分數"
                  style={{ width: '100%' }}
                  onChange={(value) => setCustomScore(value || 0)}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={8}>
              <Form.Item
                name="type"
                label="操作類型"
                rules={[{ required: true, message: '請選擇操作類型' }]}
              >
                <Button.Group style={{ width: '100%' }}>
                  <Button
                    type={selectedType === 'reward' ? 'primary' : 'default'}
                    icon={<TrophyOutlined />}
                    onClick={() => {
                      setSelectedType('reward');
                      form.setFieldsValue({ type: 'reward' });
                    }}
                    style={{ width: '50%' }}
                  >
                    獎勵
                  </Button>
                  <Button
                    type={selectedType === 'punishment' ? 'primary' : 'default'}
                    danger={selectedType === 'punishment'}
                    icon={<WarningOutlined />}
                    onClick={() => {
                      setSelectedType('punishment');
                      form.setFieldsValue({ type: 'punishment' });
                    }}
                    style={{ width: '50%' }}
                  >
                    懲罰
                  </Button>
                </Button.Group>
              </Form.Item>
            </Col>

            <Col xs={24} sm={8}>
              <Form.Item style={{ marginTop: '30px' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  icon={<ThunderboltOutlined />}
                >
                  執行操作
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="reason"
            label="操作原因"
            rules={[
              { required: true, message: '請輸入操作原因' }
            ]}
          >
            <TextArea
              rows={3}
              placeholder="請詳細描述這次操作的原因..."
              showCount
              onChange={(e) => setCustomReason(e.target.value)}
            />
          </Form.Item>
        </Form>

        {/* 預覽 */}
        {(customScore > 0 || customReason) && (
          <Card
            size="small"
            style={{
              backgroundColor: selectedType === 'reward' ? '#f6ffed' : '#fff2f0',
              marginTop: '16px',
              borderLeft: `4px solid ${selectedType === 'reward' ? '#52c41a' : '#ff4d4f'}`
            }}
          >
            <Text type="secondary">操作預覽：</Text>
            <div style={{ marginTop: '8px' }}>
              <Tag color={selectedType === 'reward' ? 'green' : 'red'}>
                {selectedType === 'reward' ? '+' : '-'}{Math.abs(customScore)} 分
              </Tag>
              <span>{customReason || '(請輸入原因)'}</span>
              <Tag
                color={selectedType === 'reward' ? 'blue' : 'orange'}
                style={{ marginLeft: '8px' }}
              >
                {selectedType === 'reward' ? '獎勵' : '懲罰'}
              </Tag>
            </div>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default QuickActions;

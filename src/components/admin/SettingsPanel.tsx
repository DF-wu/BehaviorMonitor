/**
 * 系統設定面板組件
 * 
 * 提供系統設定的管理功能：
 * - 基礎設定（初始分數、每日增加等）
 * - 通知設定
 * - 密碼管理
 * - 資料管理
 */

import React, { useState, useEffect } from 'react';
import {
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  Typography,
  Divider,
  // Switch, - removed unused import
  Alert,
  Modal,
  message,
  Row,
  Col
} from 'antd';
import {
  SettingOutlined,
  SaveOutlined,
  LockOutlined,
  // BellOutlined, - removed unused import
  DatabaseOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { useApp } from '../../hooks/useApp';
// SystemSettings - removed unused import, using type from context

const { Title, Text, Paragraph } = Typography;
const { confirm } = Modal;

const SettingsPanel: React.FC = () => {
  const { state, updateSettings, loadSettings } = useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const { settings } = state;

  /**
   * 初始化表單值
   */
  useEffect(() => {
    if (settings) {
      form.setFieldsValue({
        initialScore: settings.initialScore,
        dailyIncrement: settings.dailyIncrement,
        notificationThreshold: settings.notificationThreshold,
        adminPassword: settings.adminPassword,
      });
    }
  }, [settings, form]);

  /**
   * 監聽表單值變化
   */
  const handleFormChange = () => {
    setHasChanges(true);
  };

  /**
   * Handle settings save operation
   * 處理設定保存操作，包含表單驗證和錯誤處理
   */
  const handleSave = async (values: Record<string, unknown>) => {
    try {
      setLoading(true);
      await updateSettings(values);
      setHasChanges(false);
      message.success('設定已保存');
    } catch (saveError) {
      console.error('Save settings error:', saveError);
      message.error('保存設定失敗');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 重置表單
   */
  const handleReset = () => {
    if (settings) {
      form.setFieldsValue({
        initialScore: settings.initialScore,
        dailyIncrement: settings.dailyIncrement,
        notificationThreshold: settings.notificationThreshold,
        adminPassword: settings.adminPassword,
      });
      setHasChanges(false);
    }
  };

  /**
   * 重新載入設定
   */
  const handleReload = async () => {
    try {
      setLoading(true);
      await loadSettings();
      message.success('設定已重新載入');
    } catch (reloadError) {
      console.error('Reload settings error:', reloadError);
      message.error('重新載入失敗');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 確認重置所有設定
   */
  const handleResetAll = () => {
    confirm({
      title: '確認重置所有設定？',
      icon: <ExclamationCircleOutlined />,
      content: '這將會將所有設定恢復為預設值，此操作無法撤銷。',
      okText: '確認重置',
      okType: 'danger',
      cancelText: '取消',
      onOk: async () => {
        try {
          setLoading(true);
          await updateSettings({
            initialScore: 100,
            dailyIncrement: 1,
            notificationThreshold: 50,
            adminPassword: 'admin123',
          });
          message.success('設定已重置為預設值');
        } catch (resetError) {
          console.error('Reset settings error:', resetError);
          message.error('重置設定失敗');
        } finally {
          setLoading(false);
        }
      },
    });
  };

  if (!settings) {
    return (
      <Card>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <Text type="secondary">載入設定中...</Text>
        </div>
      </Card>
    );
  }

  return (
    <div>
      {/* 設定狀態提示 */}
      {hasChanges && (
        <Alert
          message="您有未保存的變更"
          description="請記得點擊保存按鈕來保存您的設定變更。"
          type="warning"
          showIcon
          style={{ marginBottom: '24px' }}
          action={
            <Space>
              <Button size="small" onClick={handleReset}>
                取消變更
              </Button>
              <Button size="small" type="primary" onClick={() => form.submit()}>
                立即保存
              </Button>
            </Space>
          }
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        onValuesChange={handleFormChange}
      >
        <Row gutter={24}>
          {/* 基礎設定 */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Space>
                  <SettingOutlined />
                  基礎設定
                </Space>
              }
              style={{ marginBottom: '24px' }}
            >
              <Form.Item
                name="initialScore"
                label="初始分數"
                rules={[
                  { required: true, message: '請輸入初始分數' },
                  { type: 'number', min: 0, max: 1000, message: '初始分數必須在 0-1000 之間' }
                ]}
                extra="新用戶的起始分數"
              >
                <InputNumber
                  min={0}
                  max={1000}
                  style={{ width: '100%' }}
                  placeholder="請輸入初始分數"
                />
              </Form.Item>

              <Form.Item
                name="dailyIncrement"
                label="每日自動增加分數"
                rules={[
                  { required: true, message: '請輸入每日增加分數' },
                  { type: 'number', min: 0, max: 50, message: '每日增加分數必須在 0-50 之間' }
                ]}
                extra="每天自動增加的分數，設為 0 則不自動增加"
              >
                <InputNumber
                  min={0}
                  max={50}
                  style={{ width: '100%' }}
                  placeholder="請輸入每日增加分數"
                />
              </Form.Item>

              <Form.Item
                name="notificationThreshold"
                label="通知門檻"
                rules={[
                  { required: true, message: '請輸入通知門檻' },
                  { type: 'number', min: 0, max: 200, message: '通知門檻必須在 0-200 之間' }
                ]}
                extra="當分數低於此值時發送通知"
              >
                <InputNumber
                  min={0}
                  max={200}
                  style={{ width: '100%' }}
                  placeholder="請輸入通知門檻"
                />
              </Form.Item>
            </Card>
          </Col>

          {/* 安全設定 */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Space>
                  <LockOutlined />
                  安全設定
                </Space>
              }
              style={{ marginBottom: '24px' }}
            >
              <Form.Item
                name="adminPassword"
                label="管理員密碼"
                rules={[
                  { required: true, message: '請輸入管理員密碼' },
                  { min: 3, message: '密碼至少需要 3 個字符' },
                  { max: 50, message: '密碼不能超過 50 個字符' }
                ]}
                extra="用於進入管理介面的密碼"
              >
                <Input.Password
                  placeholder="請輸入管理員密碼"
                  autoComplete="new-password"
                />
              </Form.Item>

              <Alert
                message="安全提醒"
                description="請定期更換管理員密碼，並使用強密碼來保護您的管理介面。"
                type="info"
                showIcon
                style={{ marginTop: '16px' }}
              />
            </Card>
          </Col>
        </Row>

        {/* 操作按鈕 */}
        <Card>
          <Space size="middle">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SaveOutlined />}
              size="large"
            >
              保存設定
            </Button>

            <Button
              onClick={handleReset}
              disabled={!hasChanges}
              icon={<ReloadOutlined />}
            >
              取消變更
            </Button>

            <Button
              onClick={handleReload}
              loading={loading}
              icon={<DatabaseOutlined />}
            >
              重新載入
            </Button>

            <Divider type="vertical" />

            <Button
              danger
              onClick={handleResetAll}
              icon={<ExclamationCircleOutlined />}
            >
              重置為預設值
            </Button>
          </Space>
        </Card>
      </Form>

      {/* 設定說明 */}
      <Card 
        title="設定說明" 
        style={{ marginTop: '24px' }}
        size="small"
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Title level={5}>基礎設定</Title>
            <Paragraph>
              <ul>
                <li><strong>初始分數</strong>：系統開始時的分數基準</li>
                <li><strong>每日自動增加</strong>：每天自動增加的分數，用於鼓勵持續的良好表現</li>
                <li><strong>通知門檻</strong>：當分數低於此值時，系統會發送提醒通知</li>
              </ul>
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={5}>使用建議</Title>
            <Paragraph>
              <ul>
                <li>初始分數建議設定在 50-150 之間</li>
                <li>每日增加分數不宜過高，建議 1-5 分</li>
                <li>通知門檻應該根據實際情況調整</li>
                <li>定期檢查和調整設定以達到最佳效果</li>
              </ul>
            </Paragraph>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SettingsPanel;

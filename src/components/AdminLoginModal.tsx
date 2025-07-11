/**
 * 管理員登入彈窗組件
 * 
 * 提供簡單的密碼驗證介面，成功後切換到管理模式
 * 使用 Ant Design 的 Modal 組件實現彈窗效果
 */

import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useApp } from '../hooks/useApp';

interface AdminLoginModalProps {
  visible: boolean;           // 彈窗是否可見
  onCancel: () => void;      // 取消回調函數
  onSuccess: () => void;     // 成功回調函數
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  visible,
  onCancel,
  onSuccess
}) => {
  const { enterAdminMode } = useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  /**
   * 處理表單提交
   * @param values 表單值
   */
  const handleSubmit = async (values: { password: string }) => {
    try {
      setLoading(true);
      
      // 嘗試進入管理員模式
      const success = await enterAdminMode(values.password);
      
      if (success) {
        // 登入成功
        form.resetFields();
        onSuccess();
        message.success('歡迎進入管理模式！');
      } else {
        // 登入失敗，密碼錯誤
        form.setFields([
          {
            name: 'password',
            errors: ['密碼錯誤，請重新輸入']
          }
        ]);
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('登入過程發生錯誤');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 處理彈窗關閉
   */
  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  /**
   * 處理密碼輸入框的 Enter 鍵
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      form.submit();
    }
  };

  return (
    <Modal
      title={
        <div style={{ textAlign: 'center' }}>
          <UserOutlined style={{ marginRight: 8 }} />
          管理員登入
        </div>
      }
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={400}
      centered
      maskClosable={false}
      destroyOnClose
    >
      <Form
        form={form}
        name="adminLogin"
        onFinish={handleSubmit}
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="password"
          label="管理員密碼"
          rules={[
            {
              required: true,
              message: '請輸入管理員密碼'
            },
            {
              min: 3,
              message: '密碼至少需要 3 個字符'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="請輸入管理員密碼"
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
          >
            {loading ? '驗證中...' : '進入管理模式'}
          </Button>
        </Form.Item>
      </Form>

      <div style={{ 
        marginTop: '16px', 
        textAlign: 'center', 
        color: '#666',
        fontSize: '12px'
      }}>
        <p>輸入正確的管理員密碼以進入管理介面</p>
      </div>
    </Modal>
  );
};

export default AdminLoginModal;

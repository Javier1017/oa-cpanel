import type { FC } from 'react';
import {
  ModalForm,
  ProFormUploadButton,
  ProFormSelect,
  ProFormText,
  ProFormMoney,
} from '@ant-design/pro-form';
import { employees, types } from './data';
import type { AssetsItem } from '../../data';
import { useState } from 'react';

interface PropsShape {
  visible: boolean;
  close: () => void;
  submit: (value: any) => void;
  data: AssetsItem | null;
}

const AssetDetails: FC<PropsShape> = ({ visible, close, submit, data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const submitForm = async (value: any) => {
    await waitTime(4000);
    submit(value);
  };

  const handlePrimaryButton = async (value: any) => {
    return isEditing ? await submitForm(value) : setIsEditing(true);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };

  return (
    <ModalForm
      visible={visible}
      onVisibleChange={() => setIsEditing(false)}
      title="Assets"
      modalProps={{
        destroyOnClose: true,
        onCancel: () => close(),
        okText: isEditing ? 'Confirm' : 'Edit',
        cancelText: '',
      }}
      onFinish={handlePrimaryButton}
      width={700}
      layout="horizontal"
      grid
      initialValues={data || {}}
    >
      <ProFormSelect
        name="employee"
        label="Employee"
        valueEnum={employees}
        rules={[{ required: true, message: 'Employee is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        readonly={!isEditing}
      />
      <ProFormSelect
        name="type"
        label="Assets Type"
        valueEnum={types}
        rules={[{ required: true, message: 'Asset Type is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        readonly={!isEditing}
      />
      <ProFormText
        name="assets"
        label="Asset"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Asset is required.' }]}
        readonly={!isEditing}
      />
      <ProFormText
        name="serialNumber"
        label="Serial Number"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Serial Number is required.' }]}
        readonly={!isEditing}
      />
      <ProFormMoney
        name="value"
        label="Value"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Value is required.' }]}
        readonly={!isEditing}
        min={0}
        locale="en-US"
      />
      <ProFormUploadButton
        name="attachments"
        label="Attachments"
        max={3}
        labelCol={{ span: 5 }}
        colProps={{ span: 22 }}
        valuePropName="fileList"
        title="Click to upload"
        getValueFromEvent={normFile}
        disabled={!isEditing}
      />
    </ModalForm>
  );
};

export default AssetDetails;

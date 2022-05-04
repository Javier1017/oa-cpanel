import type { FC } from 'react';
import {
  ModalForm,
  ProFormUploadButton,
  ProFormSelect,
  ProFormText,
  ProFormMoney,
} from '@ant-design/pro-form';
import { employees, types } from './data';

interface PropsShape {
  visible: boolean;
  close: () => void;
  submit: (value: any) => void;
}

const AddAsset: FC<PropsShape> = ({ visible, close, submit }) => {
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

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };

  return (
    <ModalForm
      visible={visible}
      title="Add Assets"
      modalProps={{
        destroyOnClose: true,
        onCancel: () => close(),
        okText: 'Confirm',
        cancelText: '',
      }}
      onFinish={submitForm}
      width={700}
      layout="horizontal"
      grid
    >
      <ProFormSelect
        name="employee"
        label="Employee"
        valueEnum={employees}
        rules={[{ required: true, message: 'Employee is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
      />
      <ProFormSelect
        name="assetsType"
        label="Assets Type"
        valueEnum={types}
        rules={[{ required: true, message: 'Asset Type is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
      />
      <ProFormText
        name="asset"
        label="Asset"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Asset is required.' }]}
      />
      <ProFormText
        name="serialNumber"
        label="Serial Number"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Serial Number is required.' }]}
      />
      <ProFormMoney
        name="value"
        label="Value"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Value is required.' }]}
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
      />
    </ModalForm>
  );
};

export default AddAsset;

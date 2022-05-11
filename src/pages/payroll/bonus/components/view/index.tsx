import {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormDigit,
} from '@ant-design/pro-form';
import type { FC } from 'react';
import { useState } from 'react';

interface Props {
  visible: boolean;
  close: () => void;
  onSubmit: (values: any) => void;
}

const ViewBonus: FC<Props> = ({ visible, close, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const waitTime = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  };

  const handleSubmit = async (values: any) => {
    if (isEditing) {
      await waitTime();
      onSubmit(values);
    } else {
      setIsEditing(true);
    }
  };

  const sampleValues = {
    date: '01-31-1995',
    sequence: '1',
    employee: 'Test Employee 1',
  };

  return (
    <ModalForm
      visible={visible}
      onFinish={handleSubmit}
      title="View Bonus"
      layout="horizontal"
      onVisibleChange={() => setIsEditing(false)}
      modalProps={{
        okText: isEditing ? 'Confirm' : 'Edit',
        cancelText: '',
        destroyOnClose: true,
        onCancel: () => close(),
      }}
      grid
      initialValues={sampleValues}
    >
      <ProFormDatePicker
        name="date"
        label="Date"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        rules={[{ required: true, message: 'Date is required.' }]}
        disabled={!isEditing}
      />
      <ProFormSelect
        name="sequence"
        label="Sequence"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        valueEnum={{
          1: 'Sequence 1',
          2: 'Sequence 2',
        }}
        rules={[{ required: true, message: 'Sequence is required.' }]}
        disabled={!isEditing}
      />
      <ProFormText
        name="employee"
        label="Employee"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        rules={[{ required: true, message: 'Employee is required.' }]}
        disabled={!isEditing}
      />
      <ProFormTextArea
        fieldProps={{
          autoSize: { minRows: 3, maxRows: 6 },
        }}
        name="remarks"
        label="Remarks"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        disabled={!isEditing}
      />
      <ProFormText
        name="wages"
        label="Wages"
        disabled
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
      />
      <ProFormDigit
        name="amount"
        label="Amount"
        min={1}
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        disabled={!isEditing}
      />
    </ModalForm>
  );
};

export default ViewBonus;

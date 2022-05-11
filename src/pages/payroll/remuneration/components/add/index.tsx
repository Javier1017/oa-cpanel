import {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormDigit,
} from '@ant-design/pro-form';
import type { FC } from 'react';

interface Props {
  visible: boolean;
  close: () => void;
  onSubmit: (values: any) => void;
}

const AddBonus: FC<Props> = ({ visible, close, onSubmit }) => {
  const waitTime = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  };

  const handleSubmit = async (values: any) => {
    await waitTime();
    onSubmit(values);
  };

  return (
    <ModalForm
      visible={visible}
      onFinish={handleSubmit}
      title="Add Additional Remuneration"
      layout="horizontal"
      modalProps={{
        okText: 'Confirm',
        cancelText: '',
        destroyOnClose: true,
        onCancel: () => close(),
      }}
      grid
    >
      <ProFormDatePicker
        name="date"
        label="Date"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        rules={[{ required: true, message: 'Date is required.' }]}
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
      />
      <ProFormText
        name="employee"
        label="Employee"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        rules={[{ required: true, message: 'Employee is required.' }]}
      />
      <ProFormSelect
        name="type"
        label="Remuneration Type"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
        valueEnum={{
          1: 'Remuneration Type 1',
          2: 'Remuneration Type 2',
        }}
        rules={[{ required: true, message: 'Remuneration Type is required.' }]}
      />
      <ProFormTextArea
        fieldProps={{
          autoSize: { minRows: 3, maxRows: 6 },
        }}
        name="remarks"
        label="Remarks"
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
      />
      <ProFormDigit
        name="amount"
        label="Amount"
        min={1}
        colProps={{ span: 22 }}
        labelCol={{ span: 6 }}
      />
    </ModalForm>
  );
};

export default AddBonus;

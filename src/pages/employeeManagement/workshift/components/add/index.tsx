import type { FC } from 'react';
import {
  ModalForm,
  ProFormTimePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormDatePicker,
  ProFormSwitch,
} from '@ant-design/pro-form';
import { employees } from './data';

interface PropsShape {
  show: boolean;
  close: () => void;
  submit: (value: any) => void;
}

const AddShift: FC<PropsShape> = ({ show, close, submit }) => {
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

  return (
    <ModalForm
      visible={show}
      title="Add Work Shift"
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
      <ProFormSwitch
        name="repeat"
        label="Repeat Monthly"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
      />
      <ProFormSelect
        name="employee"
        label="Employee"
        valueEnum={employees}
        rules={[{ required: true, message: 'Employee is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
      />
      <ProFormDatePicker.Month
        name="month"
        label="Month"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Month is required.' }]}
        fieldProps={{
          format: 'MMM',
        }}
      />
      <ProFormDigit
        name="hours"
        label="Work Hours"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        min={1}
        max={99}
        rules={[{ required: true, message: 'Work Hours is required.' }]}
      />
      <ProFormDigit
        name="workDays"
        label="Work Days"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Work Days is required.' }]}
        min={1}
        max={99}
      />
      <ProFormSelect
        name="days"
        label="s"
        colProps={{
          span: 22,
        }}
        labelCol={{
          span: 5,
          push: 2,
        }}
        valueEnum={{
          monday: 'Monday',
          tuesday: 'Tuesday',
          wednesday: 'Wednesday',
          thursday: 'Thursday',
          friday: 'Friday',
          saturday: 'Saturday',
          sunday: 'Sunday',
        }}
        fieldProps={{
          mode: 'multiple',
        }}
        rules={[{ required: true, message: 'Days is required' }]}
      />
      <ProFormTimePicker.RangePicker
        name="timeRange"
        label="Work Time"
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
        rules={[{ required: true, message: 'Work Time is required.' }]}
      />
    </ModalForm>
  );
};

export default AddShift;

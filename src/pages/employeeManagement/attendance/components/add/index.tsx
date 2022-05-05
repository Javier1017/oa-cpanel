import type { FC } from 'react';
import {
  ModalForm,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { employees, attendanceType } from './data';

interface Props {
  visible: boolean;
  close: () => void;
  submit: (v: any) => void;
}

const AddAttendance: FC<Props> = ({ visible, close, submit }) => {
  return (
    <>
      <ModalForm
        title="Add Attendance"
        visible={visible}
        modalProps={{
          onCancel: () => close(),
          destroyOnClose: true,
          okText: 'Confirm',
          cancelText: '',
        }}
        grid
        layout="horizontal"
        onFinish={async (v) => submit(v)}
      >
        <ProFormSelect
          name="employee"
          label="Employee"
          request={async () => employees}
          rules={[{ required: true, message: 'Employee is required.' }]}
          colProps={{ span: 22 }}
          labelCol={{ span: 5 }}
        />
        <ProFormSelect
          name="attendanceType"
          label="Attendance Type"
          request={async () => attendanceType}
          rules={[{ required: true, message: 'Attendance Type is required.' }]}
          colProps={{ span: 22 }}
          labelCol={{ span: 5 }}
        />
        <ProFormDateTimePicker
          name="dateTime"
          colProps={{ span: 22 }}
          labelCol={{ span: 5 }}
          label="Date & Time"
          rules={[{ required: true, message: 'Date & Time is required.' }]}
        />
        <ProFormTextArea
          fieldProps={{
            autoSize: { minRows: 3, maxRows: 6 },
          }}
          name="remarks"
          label="Remarks"
          colProps={{ span: 22 }}
          labelCol={{ span: 5 }}
        />
      </ModalForm>
    </>
  );
};

export default AddAttendance;

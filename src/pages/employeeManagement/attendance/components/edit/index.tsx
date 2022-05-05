import type { FC } from 'react';
import { ModalForm, ProFormTextArea, ProFormText, ProFormTimePicker } from '@ant-design/pro-form';

interface Props {
  visible: boolean;
  close: () => void;
  submit: (values: any) => void;
}

const EditAttendance: FC<Props> = ({ visible, close, submit }) => {
  const handleSubmit = async (values: any) => {
    submit(values);
  };
  return (
    <>
      <ModalForm
        visible={visible}
        title="Edit Work Time Durations"
        onFinish={handleSubmit}
        modalProps={{
          onCancel: () => close(),
          destroyOnClose: true,
          okText: 'Confirm',
          cancelText: '',
        }}
        width={700}
        layout="horizontal"
        grid
      >
        <ProFormText
          label="Work Time Durations"
          readonly
          fieldProps={{ value: '7 Hours 47 minutes' }}
          colProps={{ span: 22 }}
          labelCol={{ span: 8 }}
          width="md"
        />
        <ProFormTimePicker
          name="duration"
          label="Final Work Time Durations"
          fieldProps={{
            showNow: false,
          }}
          colProps={{ span: 22 }}
          labelCol={{ span: 8 }}
        />
        <ProFormTextArea
          fieldProps={{
            autoSize: { minRows: 3, maxRows: 6 },
          }}
          name="remarks"
          label="Remarks"
          rules={[{ required: true, message: 'Remarks is required.' }]}
          colProps={{ span: 22 }}
          labelCol={{ span: 8 }}
        />
      </ModalForm>
    </>
  );
};

export default EditAttendance;

import {
  ModalForm,
  ProFormUploadButton,
  ProFormSelect,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { employees, types } from './data';

interface PropsShape {
  show: boolean;
  close: () => void;
  submit: (value: any) => void;
}

const AddReport = ({ show, close, submit }: PropsShape) => {
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
      visible={show}
      title="Add Report"
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
        name="reportType"
        label="Report Type"
        valueEnum={types}
        rules={[{ required: true, message: 'Report Type is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
      />
      <ProFormTextArea
        fieldProps={{
          autoSize: { minRows: 3, maxRows: 6 },
        }}
        name="contents"
        label="Contents"
        rules={[{ required: true, message: 'Contents is required.' }]}
        colProps={{ span: 22 }}
        labelCol={{ span: 5 }}
      />
      <ProFormUploadButton
        name="attachments"
        label="Attachments"
        labelCol={{ span: 5 }}
        colProps={{ span: 22 }}
        valuePropName="fileList"
        title="Click to upload"
        getValueFromEvent={normFile}
      />
    </ModalForm>
  );
};

export default AddReport;

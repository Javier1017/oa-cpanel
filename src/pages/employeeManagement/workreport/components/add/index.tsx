import { ModalForm, ProFormGroup, ProFormSelect, ProFormTextArea } from '@ant-design/pro-form';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { employees, types } from './data';

interface PropsShape {
  show: boolean;
  close: () => void;
  submit: (value: any) => void;
}

const AddReport = ({ show, close, submit }: PropsShape) => {
  const submitForm = async (value: any) => {
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
      width={800}
      layout="horizontal"
    >
      <ProFormGroup>
        <ProFormSelect
          name="employee"
          label="Employee"
          valueEnum={employees}
          rules={[{ required: true, message: 'Employee is required.' }]}
          width="lg"
        />
      </ProFormGroup>
      <ProFormGroup>
        <ProFormSelect
          name="reportType"
          label="Report Type"
          valueEnum={types}
          rules={[{ required: true, message: 'Report Type is required.' }]}
          width="lg"
        />
      </ProFormGroup>
      <ProFormGroup>
        <ProFormTextArea
          fieldProps={{
            autoSize: { minRows: 3, maxRows: 6 },
          }}
          name="contents"
          label="Contents"
          rules={[{ required: true, message: 'Contents is required.' }]}
          width="lg"
        />
      </ProFormGroup>
      <Form.Item
        name="attachments"
        label="Attachments"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        // className={styles.attachments}
      >
        <Upload name="logo" maxCount={5} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ModalForm>
  );
};

export default AddReport;

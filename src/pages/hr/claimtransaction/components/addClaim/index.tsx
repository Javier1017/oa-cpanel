import {
  ModalForm,
  ProFormSelect,
  ProFormDigit,
  ProFormDatePicker,
  ProFormTextArea,
  ProFormGroup,
} from '@ant-design/pro-form';
import { employees, claimTypes } from './data';
import { ExclamationCircleTwoTone, UploadOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Form, Upload, Button, Space } from 'antd';

interface Props {
  visible: boolean;
  cancel: () => void;
  submit: (value: any) => void;
}

const AddClaim = ({ visible, cancel, submit }: Props) => {
  const submitForm = async (value: any) => {
    submit(value);
  };

  const note = (
    <div className={styles.note}>
      <ExclamationCircleTwoTone />
      <span className={styles.noteText}>
        Per Visit Limit : 199 Monthly Limit : 300 Yearly Limit : 1928
      </span>
    </div>
  );

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };

  return (
    <ModalForm
      title="Add Claim"
      visible={visible}
      modalProps={{ onCancel: () => cancel(), destroyOnClose: true, okText: 'Confirm' }}
      onFinish={submitForm}
      width={800}
    >
      <ProFormGroup>
        <ProFormSelect
          valueEnum={employees}
          name="employee"
          label="Employee"
          rules={[{ required: true, message: 'Employee is required.' }]}
          width="md"
        />
        <ProFormSelect
          valueEnum={claimTypes}
          name="claimType"
          label="Claim Type"
          rules={[{ required: true, message: 'Claim Type is required.' }]}
          width="md"
        />
      </ProFormGroup>
      <ProFormGroup>
        <Space direction="vertical">
          <ProFormDigit
            width="md"
            name="amount"
            label="Amount"
            min={1.0}
            placeholder="0.00"
            rules={[{ required: true, message: 'The field only contain numeric values' }]}
          />
          {note}
        </Space>
        <Space>
          <ProFormDatePicker.Month
            name="claimFor"
            label="Claims For"
            placeholder="Select month"
            rules={[{ required: true, message: 'Claims For is required.' }]}
            width="md"
          />
        </Space>
      </ProFormGroup>
      <ProFormTextArea
        name="remarks"
        label="Remarks"
        fieldProps={{
          autoSize: { minRows: 3, maxRows: 6 },
        }}
      />
      <Form.Item
        name="attachments"
        label="Attachments"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Attachments is required.' }]}
        className={styles.attachments}
      >
        <Upload name="logo" maxCount={5} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ModalForm>
  );
};

export default AddClaim;

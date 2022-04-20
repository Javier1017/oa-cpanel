import {
  ModalForm,
  ProFormSelect,
  ProFormTextArea,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';
import { Button, Space, Form, Upload } from 'antd';
import { PlusOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { employees, leaveTypes, leaveDuration } from './data';
import styles from './index.less';

interface PropsShape {
  visible: boolean;
  close: () => void;
  submit: () => void;
}

interface LeaveDurationShape {
  date: string[];
  duration: string;
}

interface FormShape {
  employee: number;
  leaveType: number;
  reasons: string;
  dates: LeaveDurationShape[];
  attachment?: Blob;
}

const Add = ({ visible, close, submit }: PropsShape) => {
  const submitForm = async (value: FormShape) => {
    console.log(value);
    submit();
    close();
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };

  return (
    <ModalForm
      title="Add Leave"
      onFinish={submitForm}
      visible={visible}
      modalProps={{ onCancel: () => close(), destroyOnClose: true }}
      width={700}
    >
      <ProFormSelect
        valueEnum={employees}
        name="employee"
        label="Employee"
        rules={[{ required: true, message: 'Employee is required.' }]}
        width="lg"
      />
      <div>
        <Space>
          <ProFormSelect
            valueEnum={leaveTypes}
            name="leaveType"
            label="Leave Type"
            rules={[{ required: true, message: 'Leave Type is required.' }]}
            width="lg"
          />
          <span>XXX Leaves Available: XXX</span>
        </Space>
      </div>
      <div className="ant-col ant-form-item-label">
        <label htmlFor="" className="ant-form-item-required">
          Date
        </label>
      </div>
      <Form.List name="dates" initialValue={[{ date: [], duration: null }]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <ProFormDateRangePicker
                  name={[name, 'date']}
                  rules={[{ required: true, message: 'Date is required.' }]}
                />
                <ProFormSelect
                  valueEnum={leaveDuration}
                  name={[name, 'duration']}
                  rules={[{ required: true, message: 'Leave Type is required.' }]}
                />
                {fields.length > 1 && <DeleteOutlined onClick={() => remove(name)} />}
              </Space>
            ))}
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusOutlined />}
              className={styles.addRow}
            >
              Add field
            </Button>
          </>
        )}
      </Form.List>
      <ProFormTextArea
        name="reasons"
        rules={[{ required: true, message: 'Reason is required.' }]}
        label="Reasons"
        width="lg"
      />
      <Form.Item
        name="attachments"
        label="Attachment (Optional)"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </ModalForm>
  );
};

export default Add;

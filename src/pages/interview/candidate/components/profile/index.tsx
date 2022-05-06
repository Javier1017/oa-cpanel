import type { FC } from 'react';

import ProForm, {
  ProFormUploadButton,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
  ProFormDatePicker,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import { Avatar, message, Button, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';

// css
import './index.less';

const Validator = {
  NUMERIC_ONLY: { pattern: /^[0-9]+$/, message: 'This field can only contain numeric values' },
};

const Profile: FC = () => {
  // const [avatarUploaded, setAvatarUploaded] = useState(false);

  return (
    <div className="profile">
      <ProForm
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
          },
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        grid={true}
        layout="horizontal"
        rowProps={{
          gutter: 2,
        }}
      >
        <ProForm.Group
          colProps={{
            span: 6,
          }}
        >
          <div className="avatarContainer">
            <div className="marginTop30">
              <Avatar size={128} icon={<UserOutlined />} />
            </div>
            <div className="marginTop30">
              <ProFormUploadButton
                name="avatar"
                title="Upload Avatar"
                max={1}
                onChange={(info) => {
                  console.log({ info });
                  if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                  }
                  if (info.file.status === 'done') {
                    // setAvatarUploaded(true);
                    message.success(`${info.file.name} file uploaded successfully`);
                  } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                  }
                }}
              />
            </div>
            <div style={{ marginTop: '60px' }}>Attachements (Optional):</div>
            <div>
              <Upload name="avatar">
                <Button className="uploadBtn">+ Upload</Button>
              </Upload>
            </div>
            <div style={{ marginTop: '10px' }}>Resume, Certificate, ID, etc.</div>
          </div>
        </ProForm.Group>

        <ProForm.Group
          colProps={{
            span: 9,
          }}
        >
          <ProFormText
            name="employeeName"
            label="Employee Name"
            placeholder="Employee Name"
            rules={[{ required: true }]}
          />
          <ProFormText
            name="email"
            label="Email"
            placeholder="Email"
            rules={[{ required: true }]}
          />
          <ProFormText name="idNum" label="ID Number" placeholder="ID Number" />
          <ProFormText name="passportNum" label="Passport Number" placeholder="Passport Number" />
          <ProFormSelect
            name="martital"
            label="Marital Status"
            options={[
              { label: 'Single', value: '1' },
              { label: 'Married', value: '2' },
            ]}
            placeholder="Marital Status"
          />
          <ProFormSelect
            name="race"
            label="Race"
            options={[
              { label: 'Chinese', value: '1' },
              { label: 'Malay', value: '2' },
              { label: 'Others', value: '3' },
            ]}
            placeholder="Race"
          />

          <ProFormSelect
            name="status"
            label="Status"
            options={[
              { label: 'Confirmed', value: 0 },
              { label: 'Approved', value: 1 },
            ]}
            placeholder="Screening"
            rules={[{ required: true }]}
          />

          <ProFormTextArea name="address" label="Address" placeholder="Address" />
        </ProForm.Group>
        <ProForm.Group
          colProps={{
            span: 9,
          }}
        >
          <ProFormSelect
            name="positionApplied"
            label="Position Applied"
            options={[
              { label: 'IT', value: 'it' },
              { label: 'HR', value: 'hr' },
              { label: 'Sales', value: 'sales' },
              { label: 'Marketing', value: 'mkt' },
            ]}
            placeholder="Position Applied"
            rules={[{ required: true }]}
          />
          <ProFormSelect
            name="gender"
            label="Gender"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            placeholder="Gender"
            rules={[{ required: true }]}
          />
          <ProFormText
            name="mobile"
            label="Mobile"
            placeholder="Mobile"
            rules={[Validator.NUMERIC_ONLY]}
          />
          <ProFormDatePicker
            name="dob"
            label="Date of Birth"
            placeholder="Date of Birth"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker
            name="passportExpire"
            label="Passport Expiry Date"
            placeholder="Passport Expiry Date"
          />
          <ProFormSelect
            name="qualification"
            label="Qualifications"
            options={[
              { label: 'Master', value: 'master' },
              { label: 'Degree', value: 'degree' },
            ]}
            placeholder="Qualifications"
            rules={[{ required: true }]}
          />

          <ProFormSelect
            name="interviewer"
            label="Interviewer"
            options={[
              { label: 'Probation', value: 'Probation' },
              { label: 'Contract', value: 'Contract' },
            ]}
            placeholder="Interviewer"
          />
          <ProFormDateTimePicker
            name="interviewTime"
            label="Intervier Time"
            placeholder="Intervier Time"
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

export default Profile;

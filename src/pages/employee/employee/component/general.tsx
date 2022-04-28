import { FC, useState } from 'react';
import { Avatar, Button, Upload } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormDatePicker, ProFormDigit, ProFormFieldSet, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import './index.less';

const General: FC = () => {

const Validator = {
  NUMERIC_ONLY: { pattern: /^[0-9]+$/, message: 'This field can only contain numeric values' },
};

return (
    <ProForm
        submitter={false}
        grid={true}
        layout='horizontal'
        rowProps={{
        gutter: 2,
        }}
    >
        <ProForm.Group
        colProps={{
            span: 6,
          }}>
            <div className='avatarContainer'>
                <div className='marginTop30'>
                    <Avatar size={128} icon={<UserOutlined />} />
                </div>
                <div className='marginTop30'>
                    <Upload
                        maxCount={1}
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </div>
                <div style={{marginTop: '60px'}}>
                    Attachements (Optional):
                </div>
                <div>               
                    <Upload
                        name="avatar"
                    >
                        <Button className="uploadBtn">+ Upload</Button>
                    </Upload>
                </div>
                <div style={{marginTop: '10px'}}>
                    Resume, Certificate, ID, etc.
                </div>
            </div>


        </ProForm.Group>

        <ProForm.Group
        colProps={{
            span: 9,
          }}>
            
            <ProFormText
                name="employeeCode"
                label="Employee Code"
                placeholder="Employee Code"
                rules={[{ required: true}]}
            />
            <ProFormText
                name="email"
                label="Email"
                placeholder="Email"
                rules={[{ required: true}]}
            />
            <ProFormText
                name="idNum"
                label="ID Number"
                placeholder="ID Number"
                rules={[{ required: true}]}
            />
            <ProFormText
                name="passportNum"
                label="Passport Number"
                placeholder="Passport Number"
            />
            <ProFormSelect
                name="martital"
                label="Marital Status"
                options={[
                    { label: 'Single', value: '1' },
                    { label: 'Married', value: '2' },
                ]}
                placeholder="Marital Status"
                rules={[{ required: true}]}
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
                rules={[{ required: true}]}
            />
            <ProFormSelect
                name="calendar"
                label="Calendar"
                options={[
                    { label: 'KL Calendar', value: 'kl' },
                    { label: 'PHP Calendar', value: 'php' },
                ]}
                placeholder="Calendar"
                rules={[{ required: true}]}
            />
            <ProFormSelect
                name="leaveGroup"
                label="Leave Group"
                options={[
                    { label: 'MY', value: 'my' },
                    { label: 'PHP', value: 'php' },
                ]}
                placeholder="Leave Group"
                rules={[{ required: true}]}
            />
            <ProFormText
                name="probation"
                label="Probation Months"
                placeholder="Probation Months"
                rules={[{ required: true}]}
            />
            <ProFormText
                name="resignDate"
                label="Resign Date"
                placeholder="Resign Date"
            />
            <ProFormTextArea
                name="address"
                label="Address"
                placeholder="Address"
            />
        </ProForm.Group>
        <ProForm.Group
        colProps={{
            span: 9,
          }}>
            
            <ProFormText
                name="employeeName"
                label="Employee Name"
                placeholder="Employee Name"
                rules={[{ required: true}]}
            />
            <ProFormSelect
                name="gender"
                label="Gender"
                options={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                ]}
                placeholder="Gender"
                rules={[{ required: true
                }]}
            />
            <ProFormText
                name="mobile"
                label="Mobile"
                placeholder="Mobile"
                rules={[{ required: true},
                Validator.NUMERIC_ONLY,
                ]}

            />
            <ProFormDatePicker
                name="dob"
                label="Date of Birth"
                placeholder="Date of Birth"
                rules={[{ required: true
                }]}
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
                rules={[{ required: true}]}
            />
            <ProFormSelect
                name="department"
                label="Department"
                options={[
                    { label: 'IT', value: 'it' },
                    { label: 'HR', value: 'hr' },
                    { label: 'Sales', value: 'sales' },
                    { label: 'Marketing', value: 'mkt' },
                ]}
                placeholder="Department"
                rules={[{ required: true}]}
            />
            <ProFormSelect
                name="claimGroup"
                label="Claim Group"
                options={[
                    { label: 'Standard', value: 'standard' },
                    { label: 'Manager', value: 'manager' },
                ]}
                placeholder="Claim Group"
                rules={[{ required: true}]}
            />
            <ProFormSelect
                name="status"
                label="Status"
                options={[
                    { label: 'Probation', value: 'Probation' },
                    { label: 'Contract', value: 'Contract' },
                ]}
                placeholder="Status"
                rules={[{ required: true}]}
            />
            <ProFormDatePicker
                name="joinDate"
                label="Join Date"
                placeholder="Join Date"
                rules={[{ required: true}]}
            />
            <ProFormDatePicker
                name="confirmDate"
                label="Confirm Date"
                placeholder="Confirm Date"
            />
        </ProForm.Group>
    </ProForm>
  );
};

export default General;

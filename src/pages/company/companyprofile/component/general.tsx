import { FC, useState } from 'react';
import { Avatar, Button, Upload } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormFieldSet, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import './index.less';

const General: FC = () => {

return (
    <div className='comProfile'>
    <ProForm
        submitter={false}
        grid={true}
        layout='horizontal'
        rowProps={{
        gutter: 2,
        }}
    >
        <div className='profile'>
            <Avatar size={128} icon={<UserOutlined />} />
            <span style={{marginLeft: '10px'}}>
                <Upload
                maxCount={1}
                >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </span>
        </div>
        <ProForm.Group
        colProps={{
            span: 12,
          }}>
            <ProFormText
                name="name"
                label="Company Name"
                placeholder="Please input Company Name"
                rules={[{ required: true}]}
            />
            <ProFormText
                name="name"
                label="Registration Number"
                placeholder="Please input Company Name"
            />
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 12,
            }}>
            <ProFormText
                name="email"
                label="Email"
                placeholder="Please input Email"
            />
            <ProFormFieldSet
               name="phone"
               label="Phone"
            >
                <ProFormText
                    placeholder="Phone 1"
                />
                <ProFormText
                    placeholder="Phone 2"
                />
            </ProFormFieldSet>
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 24,
            }}>
            <ProFormFieldSet
               name="address"
               label="Address"
            >
                <ProFormText
                    placeholder="Address 1"
                />
                <ProFormText
                    placeholder="Address 2"
                />
            </ProFormFieldSet>
        </ProForm.Group>
        <ProForm.Group>
            <ProFormSelect
                colProps={{
                span: 12,
                }}
                name="country"
                label="Country"
                options={[
                    { label: 'Malaysia', value: 'my' },
                    { label: 'Philippines', value: 'ph' },
                ]}
                placeholder="Please select a country"
            />
            <ProFormSelect
                colProps={{
                span: 12,
                }}
                name="region"
                label="Region"
                options={[
                    { label: 'Kuala Lumpur', value: 'kl' },
                    { label: 'Manila', value: 'mnl' },
                ]}
                placeholder="Please select a region"
            />
        </ProForm.Group>
    </ProForm>
    </div>
  );
};

export default General;

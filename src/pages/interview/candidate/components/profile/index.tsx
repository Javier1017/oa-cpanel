import { useState } from 'react';
import type { FC } from 'react';

import ProForm, { ProFormUploadButton, ProFormText, ProFormGroup } from '@ant-design/pro-form';
import { Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

// css
import profile from './index.less';

const Profile: FC = () => {
  const [avatarUploaded, setAvatarUploaded] = useState(false);

  return (
    <>
      <ProForm
        grid={true}
        layout="horizontal"
        rowProps={{
          gutter: 2,
        }}
      >
        <ProFormGroup
          colProps={{
            span: 6,
          }}
        >
          {avatarUploaded ? (
            <Avatar
              style={{
                backgroundColor: 'grey',
                verticalAlign: 'middle',
              }}
              size={128}
            >
              Uploaded
            </Avatar>
          ) : (
            <Avatar
              style={{
                backgroundColor: 'grey',
                verticalAlign: 'middle',
              }}
              size={128}
              icon={<UserOutlined />}
            />
          )}
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
                setAvatarUploaded(true);
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            }}
          />
          <div>Attachments(optional)</div>
          <div>
            <ProFormUploadButton
              name="upload"
              title="Upload File"
              max={2}
              fieldProps={{
                listType: 'picture-card',
              }}
            />
          </div>
          <div className={profile.uploadLabel}>Resume, Certificate, ID, etc.</div>
        </ProFormGroup>

        <div className="profile-form-personal-info-1">
          <ProFormGroup grid>
            <ProFormText
              name="name"
              label="Employee Name:"
              rules={[{ required: true, message: 'Please input Employee Name' }]}
            />
          </ProFormGroup>
          <ProFormGroup>
            <ProFormText
              name="name"
              label="Email"
              labelCol={{ span: 5 }}
              rules={[{ required: true, message: 'Please input Email' }]}
            />
          </ProFormGroup>
        </div>
        <div className="profile-form-personal-info-2">peronal info 2</div>
      </ProForm>
    </>
  );
};

export default Profile;

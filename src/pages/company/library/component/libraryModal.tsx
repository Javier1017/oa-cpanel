import React from 'react';
import './index.less';
import { ModalForm, ProFormText, ProFormTextArea, ProFormUploadButton } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const LibraryModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {
  return (
  <>
    {title == "View" ?
      <ModalForm
        className='libraryModal'
        modalProps={{
          onCancel: () => onCancel(),
        }}
        width={700}
        title="View Library"
        visible={visible}
        layout='horizontal'
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
          },
        }}
      >
        <ProFormText
            initialValue="Employee Handbook"
            name="name"
            label="Title"
            placeholder="Title"
            disabled
            rules={[
                {
                required: true,
                message: "Please input Title"
                },
            ]}
        />
        <ProFormTextArea
            initialValue="V1.0"
            name="desc"
            label="Descriptions"
            placeholder="Descriptions"
            disabled
        />
        <ProFormUploadButton listType="text" label="Attachment (optional)" title="Upload" name="upload"></ProFormUploadButton>
      </ModalForm>
      :
      <ModalForm
        className='libraryModal'
        modalProps={{
          onCancel: () => onCancel(),
        }}
        width={700}
        title="Add Library"
        visible={visible}
        layout='horizontal'
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
          },
        }}  
      >
        <ProFormText
          name="title"
          label="Title"
          placeholder="Title"
          rules={[
              {
              required: true,
              message: "Please input Title"
              },
          ]}
        />
        <ProFormTextArea
          name="descs"
          label="Descriptions"
          placeholder="Descriptions"
        />
        <ProFormUploadButton listType="text" label="Attachment (optional)" title="Upload" name="upload"></ProFormUploadButton>
    </ModalForm>}
  </>
  );
};

export default LibraryModal;

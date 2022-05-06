import React from 'react';
import './index.less';
import { ModalForm, ProFormText, ProFormTextArea, ProFormUploadButton } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const AnnoucementModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {
  return (
    <ModalForm
      className='annoucementModal'
      modalProps={{
        onCancel: () => onCancel(),
      }}
      width={700}
      title={title}
      visible={visible}
      layout='horizontal'
      submitter={{
        searchConfig: {
          submitText: 'Confirm',
        },
      }}
    >
        <ProFormText
            name="name"
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
            name="content"
            label="Content"
            placeholder="Content"
        />
        <ProFormUploadButton listType="text" title="Upload" label="Attachment (optional)" name="upload" />
    </ModalForm>
  );
};

export default AnnoucementModal;

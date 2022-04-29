import React from 'react';
import './index.less';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const AssetModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='assetModal'
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
            label="Assets Type"
            placeholder="Assets Type"
            rules={[
                {
                required: true,
                message: "Please input Assets Type"
                },
            ]}
        />
        <ProFormTextArea
            name="desc"
            label="Descriptions"
            placeholder="Descriptions"
        />
    </ModalForm>
  );
};

export default AssetModal;

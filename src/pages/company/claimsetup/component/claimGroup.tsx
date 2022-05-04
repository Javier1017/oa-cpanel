import React from 'react';
import './index.less';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const ClaimGroup: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='claimGroup'
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
            name="claimGroup"
            label="Claim Group"
            placeholder="Claim Group"
            rules={[
                {
                required: true,
                message: "Please input Claim Group"
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

export default ClaimGroup;

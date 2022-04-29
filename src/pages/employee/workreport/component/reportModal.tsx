import React from 'react';
import './index.less';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const ReportModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='reportModal'
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
            label="Work Report Type"
            placeholder="Work Report Type"
            rules={[
                {
                required: true,
                message: "Please input Work Report Type"
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

export default ReportModal;

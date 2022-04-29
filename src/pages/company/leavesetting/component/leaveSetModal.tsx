import React from 'react';
import './index.less';
import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const ClaimSetModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='leaveSetModal'
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
            name="from"
            label="From Service Year"
            placeholder="From Service Year"
            rules={[
                {
                required: true,
                message: "Please input From Service Year"
                },
            ]}
        />
        <ProFormText
            name="to"
            label="To Service Year"
            placeholder="To Service Year"
            rules={[
                {
                required: true,
                message: "Please input To Service Year"
                },
            ]}
        />
        <ProFormText
            name="total"
            label="Entitled Days"
            placeholder="Entitled Days"
            rules={[
                {
                required: true,
                message: "Please input Entitled Days"
                },
            ]}
        />
    </ModalForm>
  );
};

export default ClaimSetModal;

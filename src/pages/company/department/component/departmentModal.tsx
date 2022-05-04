import React from 'react';
import './index.less';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const DepartmentModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='departmentModal'
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
            name="department"
            label="Department"
            placeholder="Department"
            rules={[
                {
                required: true,
                message: "Please input Department"
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

export default DepartmentModal;

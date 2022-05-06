import React from 'react';
import './index.less';
import { ModalForm, ProFormCheckbox, ProFormDateRangePicker, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const MasterModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='masterList'
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
            name="holiday"
            label="Holiday"
            placeholder="Holiday"
            rules={[
                {
                required: true,
                message: "Please input Holiday"
                },
            ]}
        />
        <ProFormDateRangePicker 
          name="date" 
          label="Date" 
          rules={[
            {
            required: true,
            message: "Please input Date"
            },
        ]}
        />
        <ProFormTextArea
            name="desc"
            label="Descriptions"
            placeholder="Descriptions"
        />
        <ProFormCheckbox
          name="limited"
        > 
        Repeated Yearly 
        </ProFormCheckbox>

    </ModalForm>
  );
};

export default MasterModal;

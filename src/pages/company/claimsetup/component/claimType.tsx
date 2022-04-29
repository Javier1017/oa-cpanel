import React from 'react';
import './index.less';
import { ModalForm, ProFormCheckbox, ProFormGroup, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

interface CollectionCreateFormProps {
    title: string;
    visible: boolean;
    onCancel: () => void;
}

const ClaimType: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {

  return (
    <ModalForm
      className='claimType'
      modalProps={{
        onCancel: () => onCancel(),
      }}
      width={950}
      title={title}
      visible={visible}
      layout='horizontal'
      submitter={{
        searchConfig: {
          submitText: 'Confirm',
        },
      }}
    >
      <ProFormGroup
      // grid={true}
        colProps={{
        span: 24,
        }}
      >
        <ProFormText
            width="md"
            name="claimtype"
            label="Claim Type'"
            placeholder="Claim Type'"
            rules={[
                {
                required: true,
                message: "Please input Claim Type'"
                },
            ]}
        />
        <ProFormTextArea
            width="md"
            name="desc"
            label="Descriptions"
            placeholder="Descriptions"
        />
      </ProFormGroup>
      <ProFormGroup
      // grid={true}
        colProps={{
        span: 24,
        }}
      >
        <ProFormCheckbox
          width="md"
          name="limited"
          label="Limited?"
        > Limited Claims Amount
        </ProFormCheckbox>
      </ProFormGroup>


    </ModalForm>
  );
};

export default ClaimType;

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
      className='claimSetModal'
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
        <ProFormSelect
            name="claimType"
            label="Claim Type"
            placeholder="Claim Type"
            options={[
              { label: 'Medical Claim', value: 'medical' },
              { label: 'Parking Claim', value: 'parking' },
              { label: 'Toll Claim', value: 'toll' },
              { label: 'Office Claim', value: 'office' },
              { label: 'Social Claim', value: 'social' },
              { label: 'Meal Claim', value: 'meal' },
            ]}

        />
        <ProFormText
            name="pervisit"
            label="Per Visit Limit"
            placeholder="Per Visit Limit"
            rules={[
                {
                required: true,
                message: "Please input Per Visit Limit"
                },
            ]}
        />
        <ProFormText
            name="monthly"
            label="Monthly Limit"
            placeholder="Monthly Limit"
            rules={[
                {
                required: true,
                message: "Please input Monthly Limit"
                },
            ]}
        />
        <ProFormText
            name="yearly"
            label="Yearly Limit"
            placeholder="Yearly Limit"
            rules={[
                {
                required: true,
                message: "Please input Yearly Limit"
                },
            ]}
        />
    </ModalForm>
  );
};

export default ClaimSetModal;

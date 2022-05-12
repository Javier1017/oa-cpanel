import { FC, useState } from 'react';
import React from 'react';
import ProCard from '@ant-design/pro-card';
import General from './general';
import Payroll from './payroll';


interface CollectionCreateFormProps {
  visible: boolean;
  type: string;
  onCancel: () => void;
  updateModal: (arg: boolean) => void
}

const CompanyProfile: React.FC<CollectionCreateFormProps> = ({ visible, type, onCancel, updateModal }) => {
  const updateVisible = (visible: boolean): void => {
    updateModal(visible)
  }

  const [activeKey, setActiveKey] = useState('general');
  return (
    // <PageContainer title={false} >
    <ProCard

      // extra={
      //   <Button type="primary" key="edit" >
      //   Edit
      // </Button>
      // }
      tabs={{
        activeKey: activeKey,
        onChange: (key) => {
          setActiveKey(key);
        },
      }}
    >
      <ProCard.TabPane key="general" tab="General">
        <General visible={visible} type={type} updateVisible={updateVisible} ></General>
      </ProCard.TabPane>
      <ProCard.TabPane key="info" tab="Payroll Info">
        <Payroll visible={visible} type={type} updateVisible={updateVisible}></Payroll>
      </ProCard.TabPane>
    </ProCard>
    // </PageContainer>
  );
};

export default CompanyProfile;

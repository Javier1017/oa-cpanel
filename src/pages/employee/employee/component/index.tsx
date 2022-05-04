import { FC, useState } from 'react';
import React from 'react';

import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';
import General from './general';

interface CollectionCreateFormProps {
  visible: boolean;
  onCancel: () => void;
}
const CompanyProfile: React.FC<CollectionCreateFormProps>  = ({visible, onCancel}) => {

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
          <General></General>
        </ProCard.TabPane>
        <ProCard.TabPane key="info" tab="Payroll Info">
          <General></General>
        </ProCard.TabPane>
        {/* <ProCard.TabPane key="sss" tab="SSS">
          <SSS></SSS>
        </ProCard.TabPane>
        <ProCard.TabPane key="tax" tab="Tax">
          <Tax></Tax>
        </ProCard.TabPane>
        <ProCard.TabPane key="phic" tab="PHIC">
          <PHIC></PHIC>
        </ProCard.TabPane>
        <ProCard.TabPane key="hdmf" tab="HDMF">
          <HDMF></HDMF>
        </ProCard.TabPane> */}
      </ProCard>
    // </PageContainer>
  );
};

export default CompanyProfile;

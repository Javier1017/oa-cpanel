import { FC, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';
import General from './component/general';
import SSS from './component/sss';
import Tax from './component/tax';
import PHIC from './component/phic';
import HDMF from './component/hdmf';

const CompanyProfile: FC = () => {

const [activeKey, setActiveKey] = useState('general');
  return (
    <PageContainer title={false}>
      <ProCard
        extra={
          <Button type="primary" key="edit" >
          Edit
        </Button>
              }
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
        <ProCard.TabPane key="sss" tab="SSS">
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
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default CompanyProfile;

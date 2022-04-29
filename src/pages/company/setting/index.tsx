import { PageContainer } from '@ant-design/pro-layout';
import ProList from '@ant-design/pro-list';

import type { FC } from 'react';

const Setting: FC = () => {


  const dataSource = [
  {
    title: 'Payroll Settings',
    description: 'Configure Global Payroll Settings'
  },
  {
    title: 'OverTime Settings',
    description: 'Configure Global OverTime Settings'
  },
  {
    title: 'Leave Settings',
    description: 'Configure Global Leave Settings'
  },
  {
    title: 'Email SMTP Settings',
    description: 'Email SMTP Server Settings'
  },
  {
    title: 'Contribution Settings',
    description: 'Configure Contribution Settings'
  },
  ]
  
  return (
    <PageContainer title={false}>

  <ProList<{title: string, description: string}>
    metas={{
      title: {},
      description: {},
      actions: {
        render: () => {
          return [<a key="edit">Edit</a>];
        },
      },
    }}
      dataSource={dataSource}
    />
    </PageContainer>
  );
};

export default Setting;

import type { FC } from 'react';
import { useState } from 'react';
import Card from 'antd/lib/card';
import Profile from '@/pages/interview/candidate/components/profile';

const AddCandidate: FC = () => {
  const tabList = [
    {
      key: 'general',
      tab: 'General',
    },
    {
      key: 'screening',
      tab: 'Screening',
    },
    {
      key: 'interview',
      tab: 'Interview',
    },
  ];

  const contentList = {
    general: <Profile />,
    screening: <p>content2</p>,
    interview: <p>intervier</p>,
  };

  const [activeTabKey1, setActiveTabKey1] = useState('general');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </>
  );
};

export default AddCandidate;

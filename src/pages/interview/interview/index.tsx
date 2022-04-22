import type { FC } from 'react';
import { useState, useEffect } from 'react';

import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ScheduledAppliedItem, Pagination } from './data';

// local imports
import { interviewScheduled } from './tabs/scheduled';

const Interview: FC = () => {
  const [activeTabKey, setActiveTabKey] = useState('scheduled');
  const [tableData, setTableData] = useState(interviewScheduled());
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  useEffect(() => {
    setTableData(interviewScheduled());
  }, [activeTabKey]);

  return (
    <PageContainer title={false}>
      <ProTable<ScheduledAppliedItem, Pagination>
        rowKey="key"
        cardBordered={true}
        search={false}
        pagination={tableData?.paginationProps}
        request={tableData?.interviewCandidates}
        columns={tableData?.columns}
        options={false}
        toolbar={{
          menu: {
            type: 'tab',
            activeKey: activeTabKey,
            items: [
              {
                key: 'scheduled',
                label: <span>Scheduled Interview</span>,
              },
              {
                key: 'nonscheduled',
                label: <span>Non Scheduled Interview</span>,
              },
            ],
            onChange: (key) => {
              onTabChange(key as string);
            },
          },
        }}
      />
    </PageContainer>
  );
};

export default Interview;

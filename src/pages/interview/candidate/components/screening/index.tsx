import type { FC } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { PositionAppliedItem, Pagination } from './data';
import { interviewCandidates } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { Link, history } from 'umi';

const Screening: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<PositionAppliedItem>[] = [
    {
      title: 'Name',
      dataIndex: 'candidateName',
    },
    {
      title: 'ID Number',
      dataIndex: 'candidateNumber',
    },
    {
      title: 'Position Applied',
      dataIndex: 'position',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Created Time',
      dataIndex: 'createdTime',
    },
    {
      title: 'Interviewer',
      dataIndex: 'interviewer',
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
    },
    {
      title: 'Status',
      dataIndex: 'approvalStatus',
      valueEnum: {
        0: {
          text: 'Confirmed',
          color: '#FAAD14',
        },
        1: {
          text: 'Approved',
          color: '#52C41A',
        },
        2: {
          text: 'Rejected',
          color: '#FF4D4F',
        },
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (_, item) => {
        return <Link to={{ pathname: `/interview/candidate/pages/view/${item.id}` }}>View</Link>;
      },
    },
  ];

  const toolBar = [
    <Button
      type="primary"
      key="add"
      icon={<PlusOutlined />}
      onClick={() => history.push('/interview/candidate/pages/add')}
    >
      Add
    </Button>,
    <Button key="export">Export</Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<PositionAppliedItem, Pagination>
        rowKey="key"
        cardBordered={true}
        pagination={paginationProps}
        request={interviewCandidates}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Screening;

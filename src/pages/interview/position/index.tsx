import type { FC } from 'react';
import { Button, Switch } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { PositionAvailableItem, Pagination } from './data';
import { interviewCandidates } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { Link, history } from 'umi';

const IntervewCandidates: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<PositionAvailableItem>[] = [
    {
      title: 'Position',
      dataIndex: 'position',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },

    {
      title: 'Created Time',
      dataIndex: 'createdTime',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: () => {
        return <Switch defaultChecked />;
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
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={interviewCandidates}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default IntervewCandidates;

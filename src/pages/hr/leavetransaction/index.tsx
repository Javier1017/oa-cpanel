import type { FC } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { LeaveTransactionItem, Pagination } from './data';
import { leaveTransactions } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const LeaveTransaction: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<LeaveTransactionItem>[] = [
    {
      title: 'Employee Code',
      dataIndex: 'employeeCode',
    },
    {
      title: 'Employee',
      dataIndex: 'employee',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
    {
      title: 'Leave Type',
      dataIndex: 'leaveType',
    },
    {
      title: 'Applied Time',
      dataIndex: 'appliedTime',
      valueType: 'dateTime',
    },
    {
      title: 'From',
      dataIndex: 'from',
      valueType: 'date',
    },
    {
      title: 'To',
      dataIndex: 'to',
      valueType: 'date',
    },
    {
      title: 'Days',
      dataIndex: 'days',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Pending',
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
      render: (dom, entity) => {
        console.log(entity);
        return <a onClick={() => {}}>View</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />}>
      Add
    </Button>,
    <Button key="export">Export</Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<LeaveTransactionItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={leaveTransactions}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default LeaveTransaction;

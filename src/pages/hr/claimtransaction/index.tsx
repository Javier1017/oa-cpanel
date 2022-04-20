import type { FC } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ClaimTransactionItem, Pagination } from './data';
import { claimTransaction } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const LeaveTransaction: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<ClaimTransactionItem>[] = [
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
      title: 'Claim Type',
      dataIndex: 'claimType',
    },
    {
      title: 'Month',
      dataIndex: 'month',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Approved Amount',
      dataIndex: 'approvedAmount',
    },
    {
      title: 'Approval Status',
      dataIndex: 'approvalStatus',
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
      title: 'Claim Status',
      dataIndex: 'claimStatus',
      valueEnum: {
        0: {
          text: 'Pending',
          color: '#FAAD14',
        },
        1: {
          text: 'Claimed',
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
      <ProTable<ClaimTransactionItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={claimTransaction}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default LeaveTransaction;

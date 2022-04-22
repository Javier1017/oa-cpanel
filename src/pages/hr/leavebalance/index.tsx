import type { FC } from 'react';
import { Button, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { LeaveBalanceItem, Pagination } from './data';
import { leaveBalance } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const LeaveTransaction: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<LeaveBalanceItem>[] = [
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
      title: 'Join Date',
      dataIndex: 'joinDate',
      valueType: 'date',
    },
    {
      title: 'Leave Group',
      dataIndex: 'leaveGroup',
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

  const showNotification = (message: string) => {
    notification.success({
      message,
      duration: 2,
    });
  };

  const exportData = () => {
    showNotification('Exported successfully!');
  };

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />}>
      Add
    </Button>,
    <Button key="export" onClick={exportData}>
      Export
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<LeaveBalanceItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={leaveBalance}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default LeaveTransaction;

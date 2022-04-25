import type { FC } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { CommissionItem, Pagination } from './data';
import { commissions } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const Commission: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<CommissionItem>[] = [
    { title: 'Employee Code', dataIndex: 'employeeCode' },
    { title: 'Employee', dataIndex: 'employee' },
    { title: 'Department', dataIndex: 'department' },
    { title: 'Commissions Type', dataIndex: 'commissionType' },
    { title: 'Descriptions', dataIndex: 'descriptions' },
    { title: 'Sequence', dataIndex: 'sequence' },
    { title: 'Work Unit', dataIndex: 'workUnit' },
    { title: 'Rate', dataIndex: 'rate' },
    { title: 'Amount', dataIndex: 'amount' },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        console.log(dom, entity);
        return <a onClick={() => {}}>View</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => {}}>
      Add
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<CommissionItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={commissions}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Commission;

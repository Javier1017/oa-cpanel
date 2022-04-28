import type { FC } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { WorkReportItem, Pagination } from './data';
import { workReports } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const Commission: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<WorkReportItem>[] = [
    {
      title: 'Time',
      dataIndex: 'month',
      hideInTable: true,
      order: 5,
      valueType: 'dateTime',
    },
    { title: 'Employee Code', dataIndex: 'employeeCode', order: 3 },
    { title: 'Employee', dataIndex: 'employee', order: 4 },
    {
      title: 'Department',
      dataIndex: 'department',
      order: 2,
      valueEnum: {
        0: 'Department 1',
        1: 'Department 2',
        2: 'Department 3',
      },
    },
    {
      title: 'Created Time',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: 'Report Type',
      dataIndex: 'type',
      valueEnum: {
        0: 'Type 1',
        1: 'Type 2',
        2: 'Type 3',
      },
    },
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
    <Button key="export" onClick={() => {}}>
      Export
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<WorkReportItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={workReports}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Commission;

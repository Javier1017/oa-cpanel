import type { FC } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { EmployeeAttendanceItem, Pagination } from './data';
import { employeeattendance } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const EmployeeAttendance: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<EmployeeAttendanceItem>[] = [
    {
      title: 'Attendance Type',
      dataIndex: 'type',
    },
    {
      title: 'Descriptions',
      dataIndex: 'desc',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        console.log(entity);
        return <a onClick={() => {}}>Edit</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />}>
      Add
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<EmployeeAttendanceItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        search={false}
        cardBordered={true}
        pagination={paginationProps}
        request={employeeattendance}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default EmployeeAttendance;

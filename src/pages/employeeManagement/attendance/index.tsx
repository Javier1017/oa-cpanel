import type { FC } from 'react';
import { Button, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { AttendanceItem, Pagination } from './data';
import { attendance } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import Details from './components/details';
import { useState } from 'react';
import Add from './components/add';

const AttendanceList: FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const showNotification = (message: string) => {
    notification.success({
      message,
      duration: 2,
    });
  };

  const handleExport = () => {
    showNotification('Successfully Exported!');
  };

  const handleApprove = async () => {
    showNotification('Approved!');
    setShowDetails(false);
  };

  const columns: ProColumns<AttendanceItem>[] = [
    { title: 'Time', dataIndex: 'time', hideInTable: true, order: 5 },
    { title: 'Employee Code', dataIndex: 'employeeCode', order: 4 },
    { title: 'Employee', dataIndex: 'employee', order: 3 },
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
      title: 'Attendance',
      dataIndex: 'attendance',
      hideInTable: true,
      valueEnum: {
        0: 'Option 1',
        1: 'Option 2',
        2: 'Option 3',
      },
    },
    {
      title: 'Work Time Durations',
      dataIndex: 'duration',
      hideInSearch: true,
    },
    {
      title: 'Created Time',
      hideInSearch: true,
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: 'Status',
      hideInSearch: true,
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Approved',
          color: '#52C41A',
        },
        1: {
          text: 'Pending',
          color: '#FAAD14',
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
        console.log(dom, entity);
        return <a onClick={() => setShowDetails(true)}>View</a>;
      },
    },
  ];

  const handleAdd = (values: any) => {
    showNotification('Added!');
    setShowAdd(false);
    console.log(values);
  };

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => setShowAdd(true)}>
      Add
    </Button>,
    <Button key="export" onClick={() => handleExport()}>
      Export
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<AttendanceItem, Pagination>
        // headerTitle="????????????"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={attendance}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
      <Details
        visible={showDetails}
        close={() => setShowDetails(false)}
        approve={() => handleApprove()}
      />
      <Add visible={showAdd} close={() => setShowAdd(false)} submit={(v) => handleAdd(v)} />
    </PageContainer>
  );
};

export default AttendanceList;

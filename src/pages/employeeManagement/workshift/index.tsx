import type { FC } from 'react';
import { useState } from 'react';
import { Button, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { WorkShiftItem, Pagination } from './data';
import { workShifts } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
// import Details from './components/details';
import Add from './components/add';

const WorkReport: FC = () => {
  // const [details, setDetails] = useState<WorkShiftItem | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  // const [showDetails, setShowDetails] = useState(false);

  const openDetails = (data: WorkShiftItem) => {
    console.log(data);
    // setDetails(data);
    // setShowDetails(true);
  };

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<WorkShiftItem>[] = [
    { title: 'Employee Code', dataIndex: 'employeeCode', order: 4 },
    { title: 'Employee', dataIndex: 'employee', order: 5 },
    {
      title: 'Department',
      dataIndex: 'department',
      order: 3,
      valueEnum: {
        0: 'Department 1',
        1: 'Department 2',
        2: 'Department 3',
      },
    },
    {
      title: 'Work Hours',
      dataIndex: 'workHours',
      order: 2,
    },
    {
      title: 'Work Days',
      dataIndex: 'workDays',
      order: 1,
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        console.log(dom, entity);
        return <a onClick={() => openDetails(entity)}>View</a>;
      },
    },
  ];

  const showNotification = (message: string) => {
    notification.success({
      message,
      duration: 2,
    });
  };

  const handleSubmit = (value: any) => {
    console.log(value);
    showNotification('Successfully Added!');
    setShowAdd(false);
  };

  const handleExport = () => {
    showNotification('Successfully Exported!');
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
      <ProTable<WorkShiftItem, Pagination>
        // headerTitle="????????????"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={workShifts}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
      {/* <Details data={details} show={showDetails} close={() => setShowDetails(false)} /> */}
      <Add show={showAdd} close={() => setShowAdd(false)} submit={handleSubmit} />
    </PageContainer>
  );
};

export default WorkReport;

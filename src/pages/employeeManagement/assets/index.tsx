import type { FC } from 'react';
import { Button, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { AssetsItem, Pagination } from './data';
import { assets } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
// import Details from './components/details';
// import Add from './components/add';

const WorkReport: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<AssetsItem>[] = [
    { title: 'Employee Code', dataIndex: 'employeeCode' },
    { title: 'Employee', dataIndex: 'employee' },
    {
      title: 'Department',
      dataIndex: 'department',
      valueEnum: {
        0: 'Department 1',
        1: 'Department 2',
        2: 'Department 3',
      },
    },
    {
      title: 'Assets Type',
      dataIndex: 'type',
      valueEnum: {
        0: 'Type 1',
        1: 'Type 2',
        2: 'Type 3',
      },
    },
    {
      title: 'Assets',
      dataIndex: 'assets',
    },
    {
      title: 'Serial Number',
      dataIndex: 'serialNumber',
    },
    {
      title: 'Value',
      dataIndex: 'value',
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

  const showNotification = (message: string) => {
    notification.success({
      message,
      duration: 2,
    });
  };

  const handleExport = () => {
    showNotification('Successfully Exported!');
  };

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => {}}>
      Add
    </Button>,
    <Button key="export" onClick={() => handleExport()}>
      Export
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<AssetsItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={assets}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
      {/* <Details data={details} show={showDetails} close={() => setShowDetails(false)} />
      <Add show={showAdd} close={() => setShowAdd(false)} submit={handleSubmit} /> */}
    </PageContainer>
  );
};

export default WorkReport;

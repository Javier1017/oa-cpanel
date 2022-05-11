import type { FC } from 'react';
import { useState } from 'react';
import { Button, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { BonusItem, Pagination } from './data';
import { bonus } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import AddBonus from './components/add';
import ViewBonus from './components/view';

const Commission: FC = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<BonusItem>[] = [
    {
      title: 'Month',
      dataIndex: 'month',
      hideInTable: true,
      order: 4,
      valueEnum: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
      },
    },
    { title: 'Employee Code', dataIndex: 'employeeCode', hideInSearch: true },
    { title: 'Employee', dataIndex: 'employee', order: 1 },
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
      title: 'Sequence',
      dataIndex: 'sequence',
      order: 3,
      valueEnum: {
        'First Half': 'First Half',
        'Second Half': 'Second Half',
      },
    },
    { title: 'Descriptions', dataIndex: 'descriptions', hideInSearch: true },
    { title: 'Wages', dataIndex: 'wages', hideInSearch: true },
    { title: 'Amount', dataIndex: 'amount', hideInSearch: true },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        console.log(dom, entity);
        return <a onClick={() => setShowView(true)}>View</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => setShowAdd(true)}>
      Add
    </Button>,
  ];

  const showNotification = (message: string) => {
    notification.success({
      message,
      duration: 2,
    });
  };

  const handleAdd = (values: any) => {
    console.log(values);
    setShowAdd(false);
    showNotification('Added!');
  };

  const handleEdit = (values: any) => {
    console.log(values);
    setShowView(false);
    showNotification('Updated!');
  };

  return (
    <PageContainer title={false}>
      <ProTable<BonusItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={bonus}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
      <AddBonus visible={showAdd} close={() => setShowAdd(false)} onSubmit={handleAdd} />
      <ViewBonus visible={showView} close={() => setShowView(false)} onSubmit={handleEdit} />
    </PageContainer>
  );
};

export default Commission;

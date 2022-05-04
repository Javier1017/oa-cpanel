import type { FC } from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { EmployeeSetupItem, Pagination } from './data';
import { employeesetup } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import EmployeeModal from './component';

const EmployeeSetup: FC = () => {
  const [modal, setModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<EmployeeSetupItem>[] = [
    {
      title: 'Employee Code',
      dataIndex: 'employeeCode',
      order: 3,
    },
    {
      title: 'Employee',
      dataIndex: 'employee',
      order: 6,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      order: 4,
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      valueType: 'date',
      order: 7,
    },
    {
      title: 'ID Number',
      dataIndex: 'IDnum',
      order: 5,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      order: 2,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      order: 1,
      valueEnum: {
        0: {
          text: 'Confirmed',
          color: '#52C41A',
        },
        1: {
          text: 'Probation',
          color: '#F8EE08',
        },
        2: {
          text: 'Resigned',
          color: '#FF7300',
        },
        3: {
          text: 'Terminated',
          color: '#F00F0F',
        },
        4: {
          text: 'Contractual',
          color: '#5E5E5E',
        },
        5: {
          text: 'Inactive',
          color: '#5E5E5E',
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
    <Button type="primary" key="add" icon={<PlusOutlined />}  onClick={() => {setModal(true);}}>
      Add
    </Button>,
    <Button key="export">Export</Button>,
  ];

  return (
    <PageContainer title={false}>
      {modal ? 
        <EmployeeModal
          visible={modal}
          onCancel={() => setModal(false)}>
        </EmployeeModal>
      :
        <ProTable<EmployeeSetupItem, Pagination>
          // headerTitle="查询表格"
          // actionRef={actionRef}
          rowKey="key"
          cardBordered={true}
          search={{
            labelWidth: 120,
          }}
          pagination={paginationProps}
          request={employeesetup}
          columns={columns}
          options={false}
          toolBarRender={() => toolBar}
        />
      }
    </PageContainer>
  );
};

export default EmployeeSetup;

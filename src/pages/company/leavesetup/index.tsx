import type { FC } from 'react';
import { useState } from 'react';
import { Button, Switch } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { TypeItem, typePagination } from './leaveType/data';
import { leavetype } from './leaveType/service';
import type { GroupItem, groupPagination } from './leaveGroup/data';
import { leavegroup } from './leaveGroup/service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import LeaveGroup from './component/leaveGroup';
import LeaveType from './component/leaveType';


const ClaimSetup: FC = () => {
  const [activeKey, setActiveKey] = useState('type');
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const [typeTitle, setTypeTitle] = useState('');
  const [typeModal, setTypeModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columnsType: ProColumns<TypeItem>[] = [
    {
      title: 'Leave Type',
      dataIndex: 'type',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Descriptions',
      dataIndex: 'desc',
    },
    {
      title: 'Limited',
      dataIndex: 'limited',
    },
    {
      title: 'Unpaid Leave',
      dataIndex: 'unpaid',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      search: false,
      render: (_, value) => {
        return (
          <Switch
            checkedChildren="&#10003;"
            unCheckedChildren="&#x2715;"
            defaultChecked={value.status}
          />
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        return <a onClick={() => { setTypeModal(true); setTypeTitle('View Leave Type'); }}>View</a>;
      },
    },
  ];

  const columnsGroup: ProColumns<GroupItem>[] = [
    {
      title: 'Leave Group',
      dataIndex: 'type',
    },
    {
      title: 'Descriptions',
      dataIndex: 'desc',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      search: false,
      render: (_, value) => {
        return (
          <Switch
            checkedChildren="&#10003;"
            unCheckedChildren="&#x2715;"
            defaultChecked={value.status}
          />
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        return <a onClick={() => { setModal(true); setTitle('Edit Leave Group'); }}>Edit</a>;
      },
    },
  ];


  return (
    <PageContainer title={false}>
      <LeaveGroup
        title={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />
      <LeaveType
        title={typeTitle}
        typeVisible={typeModal}
        onCancel={() => setTypeModal(false)}
      />

      {activeKey == 'type' &&
        <ProTable<TypeItem, typePagination>
          // headerTitle="查询表格"
          // actionRef={actionRef}
          rowKey="key"
          search={false}
          cardBordered={true}
          pagination={paginationProps}
          request={leavetype}
          columns={columnsType}
          options={false}
          toolbar={{
            multipleLine: true,
            menu: {
              type: 'tab',
              activeKey: activeKey,
              onChange: (key) => setActiveKey(key as string),
              items: [
                {
                  key: 'type',
                  label: 'Leave Type',
                },
                {
                  key: 'group',
                  label: 'Leave Group',
                },
              ],
            },
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => { setTypeModal(true); setTypeTitle('Add Leave Type'); }}>
                Add
              </Button>
            ],
          }}
        />
      }
      {activeKey == 'group' &&
        <ProTable<GroupItem, groupPagination>
          // headerTitle="查询表格"
          // actionRef={actionRef}
          rowKey="key"
          search={false}
          cardBordered={true}
          pagination={paginationProps}
          request={leavegroup}
          columns={columnsGroup}
          options={false}
          toolbar={{
            multipleLine: true,
            menu: {
              type: 'tab',
              activeKey: activeKey,
              onChange: (key) => setActiveKey(key as string),
              items: [
                {
                  key: 'type',
                  label: 'Leave Type',
                },
                {
                  key: 'group',
                  label: 'Leave Group',
                },
              ],
            },
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => { setModal(true); setTitle('Add Leave Group'); }}>
                Add
              </Button>
            ],
          }}
        />}
    </PageContainer>
  );
};

export default ClaimSetup;

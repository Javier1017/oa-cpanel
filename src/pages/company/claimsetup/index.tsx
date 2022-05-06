import type { FC } from 'react';
import { useState } from 'react';
import { Button, Switch } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { GroupItem, groupPagination } from './claimGroup/data';
import { claimgroup } from './claimGroup/service';
import type { ClaimItem, claimPagination } from './claimType/data';
import { claimtype } from './claimType/service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import ClaimGroup from './component/claimGroup';
import ClaimType from './component/claimType';

const ClaimSetup: FC = () => {
  const [activeKey, setActiveKey] = useState('type');
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const [titleType, setTitleType] = useState('');
  const [modalType, setModalType] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columnsType: ProColumns<ClaimItem>[] = [
    {
      title: 'Leave Type',
      dataIndex: 'type',
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
        return <a onClick={() => { setModalType(true); setTitleType('Edit Claim Type'); }}>Edit</a>;
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
        return <a onClick={() => { setModal(true); setTitle('Edit Claim Group'); }}>Edit</a>;
      },
    },
  ];


  return (
    <PageContainer title={false}>
      <ClaimType
        title={titleType}
        visible={modalType}
        onCancel={() => setModalType(false)}
      />
      <ClaimGroup
        title={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />

      {activeKey == 'type' &&
        <ProTable<ClaimItem, claimPagination>
          // headerTitle="查询表格"
          // actionRef={actionRef}
          rowKey="key"
          search={false}
          cardBordered={true}
          pagination={paginationProps}
          request={claimtype}
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
                  label: 'Claim Type',
                },
                {
                  key: 'group',
                  label: 'Claim Group',
                },
              ],
            },
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => { setModalType(true); setTitleType('Add Claim Type'); }}>
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
          request={claimgroup}
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
                  label: 'Claim Type',
                },
                {
                  key: 'group',
                  label: 'Claim Group',
                },
              ],
            },
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => { setModal(true); setTitle('Add Claim Group'); }}>
                Add
              </Button>
            ],
          }}
        />}
    </PageContainer>
  );
};

export default ClaimSetup;

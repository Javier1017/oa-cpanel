import type { FC } from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { SettingItem, Pagination } from './data';
import { leavesetting } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormSelect } from '@ant-design/pro-form';
import LeaveSetModal from './component/leaveSetModal';


const ClaimSetup: FC = () => {
  const [activeKey, setActiveKey] = useState('annual');
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columnsType: ProColumns<SettingItem>[] = [
    {
      title: 'From Service Year',
      dataIndex: 'from',
    },
    {
      title: 'To Service Year',
      dataIndex: 'to',
    },
    {
      title: 'Entitled Days',
      dataIndex: 'total',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        return <a onClick={() => {setModal(true); setTitle('Edit Leave Group');}}>Edit</a>;
      },
    },
  ];


  return (
    <PageContainer title={false}>

        <LeaveSetModal
          title={title}
          visible={modal}
          onCancel={() => setModal(false)}
        />

        <ProTable<SettingItem, Pagination>
          rowKey="key"
          search={false}
          cardBordered={true}
          pagination={paginationProps}
          request={leavesetting}
          columns={columnsType}
          options={false}
          headerTitle={
            <ProFormSelect 
              name="leaveGroup"
              label="Leave Group"
              options={[
                { label: 'Standard', value: 'Standard' },
                { label: 'MY', value: 'MY' },
                { label: 'PHP', value: 'PHP' },
                { label: 'KL', value: 'KL' },
              ]}
            >
            </ProFormSelect>
          }
          toolbar={{
            multipleLine: true,
            tabs: {
              activeKey: activeKey,
              onChange: (key) => setActiveKey(key as string),
              items: [
                {
                  key: 'annual',
                  tab: 'Annual Leave',
                },
                {
                  key: 'sick',
                  tab: 'Sick Leave',
                },
                {
                  key: 'urgent',
                  tab: 'Urgent Leave',
                },
                {
                  key: 'nonpaid',
                  tab: 'Non Paid Leave',
                },
                {
                  key: 'maternity',
                  tab: 'Maternity Leave',
                },
                {
                  key: 'marriage',
                  tab: 'Marriage Leave',
                },

              ],
            },
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined/>} onClick={() => {setModal(true); setTitle('Add Leave Group');}}>
              Add
              </Button>
            ],
          }}
        />
    </PageContainer>
  );
};

export default ClaimSetup;

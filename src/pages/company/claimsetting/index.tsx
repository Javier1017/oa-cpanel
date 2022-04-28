import type { FC } from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { SettingItem, Pagination } from './data';
import { claimsetting } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormSelect } from '@ant-design/pro-form';
import ClaimSetModal from './component/claimSetModal';

const ClaimSetting: FC = () => {
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
      title: 'Claim Type',
      dataIndex: 'type',
    },
    {
      title: 'Per Visit Limit',
      dataIndex: 'pervisit',
    },
    {
      title: 'Monthly Limit',
      dataIndex: 'monthly',
    },
    {
      title: 'Yearly Limit',
      dataIndex: 'monthly',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        return <a onClick={() => {setModal(true); setTitle('Edit Claim Group');}}>Edit</a>;
      },
    },
  ];


  return (
    <PageContainer title={false}>
        <ClaimSetModal
          title={title}
          visible={modal}
          onCancel={() => setModal(false)}
        />

        <ProTable<SettingItem, Pagination>
          rowKey="key"
          search={false}
          cardBordered={true}
          pagination={paginationProps}
          request={claimsetting}
          columns={columnsType}
          options={false}
          headerTitle={
            <ProFormSelect 
              name="claimGroup"
              label="Claim Group"
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
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined/>} onClick={() => {setModal(true); setTitle('Add Claim Group');}}>
              Add
              </Button>
            ],
          }}
        />
    </PageContainer>
  );
};

export default ClaimSetting;

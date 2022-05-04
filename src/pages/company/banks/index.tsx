import type { FC } from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { BanksItem, Pagination } from './data';
import { banks } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import BankModal from './component/bankModal';

const Banks: FC = () => {
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<BanksItem>[] = [
    {
      title: 'Bank Name',
      dataIndex: 'bank',
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
        return <a onClick={() => {setModal(true); setTitle('Edit Banks');}}>Edit</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined/>} onClick={() => {setModal(true); setTitle('Add Banks');}}>
      Add
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <BankModal
        title={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />

      <ProTable<BanksItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        search={false}
        cardBordered={true}
        pagination={paginationProps}
        request={banks}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Banks;

import type { FC } from 'react';
import { Button, Switch } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { AssetItem, Pagination } from './data';
import { assets } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const Assets: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<AssetItem>[] = [
    {
      title: 'Assets Type',
      dataIndex: 'asset',
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
        console.log(entity);
        return <a onClick={() => {}}>Edit</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />}>
      Add
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<AssetItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        search={false}
        cardBordered={true}
        pagination={paginationProps}
        request={assets}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Assets;

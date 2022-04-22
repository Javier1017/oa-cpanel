import type { FC } from 'react';
import { Button, Space, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { LibraryItem, Pagination } from './data';
import { library } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const Library: FC = () => {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<LibraryItem>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      order: 2,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      order: 1,
    },
    {
      title: 'Descriptions',
      dataIndex: 'desc',
      search: false
    },
    {
      title: 'Date',
      dataIndex: 'date',
      valueType: 'date',
      order: 3,
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: () => (
        <Space split={<Divider type="vertical" />}>
          <a>View</a>
          <a>Download</a>
        </Space>
      ),
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />}>
      Add
    </Button>,
    <Button key="export">Export</Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<LibraryItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={library}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Library;

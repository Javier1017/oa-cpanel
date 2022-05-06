import type { FC } from 'react';
import { useState } from 'react';
import { Button,Switch } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { AnnouncementItem, Pagination } from './data';
import { annoucement } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import AnnoucementModal from './component/annoucementModal';

const Announcement: FC = () => {
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<AnnouncementItem>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      order: 1,
    },
    {
      title: 'Content',
      dataIndex: 'content',
      search: false,
    },
    {
      title: 'Post Time',
      dataIndex: 'postTime',
      valueType: 'date',
      order: 3,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      order: 2,
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
        return <a onClick={() => {setModal(true); setTitle('Announcement Details');}}>View</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined/>} onClick={() => {setModal(true); setTitle('Add Announcement Details');}}>
      Add
    </Button>,
    <Button key="export">Export</Button>,
  ];

  return (
    <PageContainer title={false}>
      <AnnoucementModal
        title={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />
      
      <ProTable<AnnouncementItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={annoucement}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Announcement;

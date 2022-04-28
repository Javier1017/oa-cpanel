import type { FC } from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { WorkReportItem, Pagination } from './data';
import { workreport } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import ReportModal from './component/reportModal';

const WorkReport: FC = () => {
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<WorkReportItem>[] = [
    {
      title: 'Work Report Type',
      dataIndex: 'type',
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
        return <a onClick={() => {setModal(true); setTitle('Edit Work Report Type');}}>Edit</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => {setModal(true); setTitle('Add Work Report Type');}}>
      Add
    </Button>,
  ];

  return (
    <PageContainer title={false}>

      <ReportModal
        title={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />
      <ProTable<WorkReportItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        search={false}
        cardBordered={true}
        pagination={paginationProps}
        request={workreport}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default WorkReport;

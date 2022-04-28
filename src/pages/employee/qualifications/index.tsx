import type { FC } from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { QualificationItem, Pagination } from './data';
import { qualification } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import QualificationModal from './component/qualificationModal';


const Qualification: FC = () => {
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<QualificationItem>[] = [
    {
      title: 'Qualifications',
      dataIndex: 'qualifications',
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
        return <a onClick={() => {setModal(true); setTitle('Edit Qualifications');}}>Edit</a>;
      },
    },
  ];

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => {setModal(true); setTitle('Add Qualifications');}}>
      Add
    </Button>,
  ];

  return (
    <PageContainer title={false}>

      <QualificationModal
        title={title}
        visible={modal}
        onCancel={() => setModal(false)}
      />

      <ProTable<QualificationItem, Pagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        search={false}
        cardBordered={true}
        pagination={paginationProps}
        request={qualification}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
    </PageContainer>
  );
};

export default Qualification;

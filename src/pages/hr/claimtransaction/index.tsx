import type { FC } from 'react';
import { useState } from 'react';
import { Button, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ClaimTransactionItem, Pagination } from './data';
import { claimTransaction } from './service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import Details from './components/details';
import AddClaim from './components/addClaim';

const ClaimTransaction: FC = () => {
  const [data, setData] = useState<ClaimTransactionItem | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const view = (row: ClaimTransactionItem) => {
    setData(row);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setData(null);
    setShowDetails(false);
  };

  const openNotification = (message: string) => {
    notification.success({
      message,
      description: '',
      duration: 2,
      // icon: <CheckOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const reject = () => {
    closeDetails();
    openNotification('Rejected!');
    console.log('reject');
  };

  const approve = () => {
    closeDetails();
    openNotification('Approved!');
    console.log('approve');
  };

  const submit = (value: any) => {
    closeDetails();
    openNotification('Added!');
    console.log(value, 'added');
    setShowAdd(false);
  };

  const columns: ProColumns<ClaimTransactionItem>[] = [
    {
      title: 'Employee Code',
      dataIndex: 'employeeCode',
    },
    {
      title: 'Employee',
      dataIndex: 'employee',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
    {
      title: 'Claim Type',
      dataIndex: 'claimType',
    },
    {
      title: 'Month',
      dataIndex: 'month',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Approved Amount',
      dataIndex: 'approvedAmount',
    },
    {
      title: 'Approval Status',
      dataIndex: 'approvalStatus',
      valueEnum: {
        0: {
          text: 'Pending',
          color: '#FAAD14',
        },
        1: {
          text: 'Approved',
          color: '#52C41A',
        },
        2: {
          text: 'Rejected',
          color: '#FF4D4F',
        },
      },
    },
    {
      title: 'Claim Status',
      dataIndex: 'claimStatus',
      valueEnum: {
        0: {
          text: 'Pending',
          color: '#FAAD14',
        },
        1: {
          text: 'Claimed',
          color: '#52C41A',
        },
        2: {
          text: 'Rejected',
          color: '#FF4D4F',
        },
      },
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (dom, entity) => {
        return <a onClick={() => view(entity)}>View</a>;
      },
    },
  ];

  const exportData = () => {
    openNotification('Exported succcessfully!');
  };

  const toolBar = [
    <Button type="primary" key="add" icon={<PlusOutlined />} onClick={() => setShowAdd(true)}>
      Add
    </Button>,
    <Button key="export" onClick={exportData}>
      Export
    </Button>,
  ];

  return (
    <PageContainer title={false}>
      <ProTable<ClaimTransactionItem, Pagination>
        // headerTitle="????????????"
        // actionRef={actionRef}
        rowKey="key"
        cardBordered={true}
        search={{
          labelWidth: 120,
        }}
        pagination={paginationProps}
        request={claimTransaction}
        columns={columns}
        options={false}
        toolBarRender={() => toolBar}
      />
      <Details
        data={data}
        show={showDetails}
        reject={reject}
        approve={approve}
        close={closeDetails}
      />
      <AddClaim
        visible={showAdd}
        cancel={() => setShowAdd(false)}
        submit={(value: any) => submit(value)}
      />
    </PageContainer>
  );
};

export default ClaimTransaction;

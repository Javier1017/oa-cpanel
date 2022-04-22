import { Modal, Button } from 'antd';
import type { LeaveBalanceItem } from '../../data';
import styles from './index.less';
import ProDescriptions from '@ant-design/pro-descriptions';
import { EditableProTable } from '@ant-design/pro-table';
import type { LeavesItem } from './data';
import type { ProColumns } from '@ant-design/pro-table';
import { detailedBalance } from './service';
import { useState } from 'react';

interface PropsShape {
  visible: boolean;
  close: () => void;
  data: LeaveBalanceItem | null;
}

const Details = ({ visible, close, data }: PropsShape) => {
  const [rowKey, setRowKey] = useState<string | undefined>(undefined);

  const columns: ProColumns<LeavesItem>[] = [
    {
      title: '',
      dataIndex: 'id',
      editable: false,
    },
    {
      title: 'Annual Leave',
      dataIndex: 'annual',
      valueType: 'digit',
    },
    {
      title: 'Sick Leave',
      dataIndex: 'sick',
      valueType: 'digit',
    },
    {
      title: 'Emergency Leave',
      dataIndex: 'emergency',
      valueType: 'digit',
    },
    {
      title: 'Vacation Leave',
      dataIndex: 'vacation',
      valueType: 'digit',
    },
  ];

  const handleToolbarAction = () => {
    if (rowKey) setRowKey(undefined);
    else setRowKey('id');
  };

  const toolbar = [
    <Button key="toggle" type="primary" onClick={() => handleToolbarAction()}>
      {rowKey ? 'Confirm' : 'Edit'}
    </Button>,
  ];

  return (
    <Modal
      title="Leave Details"
      visible={visible}
      onCancel={close}
      destroyOnClose={true}
      width={900}
      footer={null}
    >
      {data?.id && (
        <>
          <ProDescriptions<LeaveBalanceItem>
            className={styles.detailsForm}
            column={2}
            title={false}
            request={async () => ({
              data: data || {},
            })}
            params={{
              id: data?.id,
            }}
            columns={[
              {
                title: 'Employee Code',
                dataIndex: 'employeeCode',
              },
              {
                title: 'Department',
                dataIndex: 'department',
              },
              {
                title: 'Employee',
                dataIndex: 'employee',
              },
              {
                title: 'Join Date',
                dataIndex: 'joinDate',
                valueType: 'date',
              },
              {
                title: 'Leave Group',
                dataIndex: 'leaveGroup',
              },
            ]}
          />
          <EditableProTable<LeavesItem>
            rowKey={rowKey}
            options={false}
            recordCreatorProps={false}
            request={detailedBalance}
            columns={columns}
            search={false}
            toolBarRender={() => toolbar}
            pagination={false}
            editable={{
              type: 'single',
              editableKeys: ['Balance'],
              actionRender: (row, config, defaultDoms) => {
                console.log(defaultDoms);
                return [defaultDoms.delete];
              },
              onValuesChange: (record, recordList) => {
                console.log(recordList);
              },
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default Details;

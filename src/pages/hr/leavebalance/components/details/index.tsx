import { Modal, Button, Form } from 'antd';
import type { LeaveBalanceItem } from '../../data';
import styles from './index.less';
import ProDescriptions from '@ant-design/pro-descriptions';
import { EditableProTable } from '@ant-design/pro-table';
import type { LeavesItem } from './data';
import type { ProColumns } from '@ant-design/pro-table';
import { detailedBalance } from './service';
import { useState, useRef } from 'react';

interface PropsShape {
  visible: boolean;
  close: () => void;
  data: LeaveBalanceItem | null;
}

const Details = ({ visible, close, data }: PropsShape) => {
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();
  const table = useRef<any>();

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

  const submitForm = async (values: any) => {
    console.log(values);
  };

  const handleToolbarAction = () => {
    const formData = form.getFieldsValue();
    if (editing) {
      submitForm(formData); // submit form to backend
      setEditing((v) => !v); // Remove editable
      table.current.reset(); // Reset table
      table.current.reloadAndRest();
      table.current.reload();
      table.current?.cancelEditable('Balance');
    } else {
      table.current?.startEditable('Balance');
      setEditing((v) => !v);
    }
  };

  const toolbar = [
    <Button key="toggle" type="primary" onClick={() => handleToolbarAction()}>
      {editing ? 'Confirm' : 'Edit'}
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
            actionRef={table}
            rowKey="id"
            options={false}
            recordCreatorProps={false}
            request={detailedBalance}
            columns={columns}
            search={false}
            toolBarRender={() => toolbar}
            pagination={false}
            editable={{
              form,
              type: 'single',
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

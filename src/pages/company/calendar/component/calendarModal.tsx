import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { ModalForm, ProFormGroup, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

type DataSourceType = {
  id: React.Key;
  title?: string;
  desc?: string;
  created_at?: string;
  update_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 1,
    title: 'New Year',
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
    desc: 'Public Holiday',
  },
  {
    id: 2,
    title: 'Labour Day',
    created_at: '2020-05-26T08:19:22Z',
    update_at: '2020-05-26T08:19:22Z',
    desc: 'Public Holiday',
  },
  {
    id: 3,
    title: 'Christmas',
    created_at: '2020-05-26T08:19:22Z',
    update_at: '2020-05-26T08:19:22Z',
    desc: 'Public Holiday',
  },
  {
    id: 4,
    title: 'Nation Day',
    created_at: '2020-05-26T08:19:22Z',
    update_at: '2020-05-26T08:19:22Z',
    desc: 'Public Holiday',
  },
];

interface CollectionCreateFormProps {
    visible: boolean;
    onCancel: () => void;
}

const CalendarModal: React.FC<CollectionCreateFormProps> = ({ visible, onCancel }) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'Holiday',
      dataIndex: 'title',
      // 第一行不允许编辑
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
        title: 'Date',
        dataIndex: 'created_at',
        valueType: 'date',
      },
    {
      title: 'Descriptions',
      dataIndex: 'desc',
      editable: (text, record, index) => {
        return index !== 0;
      },
      fieldProps: (from, { rowKey, rowIndex }) => {
        if (from.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: 'Action',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          Edit
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          Delete
        </a>,
      ],
    },
  ];

  return (
    <>
      <ModalForm
        className='calendarModal'
        modalProps={{
          onCancel: () => onCancel(),
        }}
        width={1070}
        title="Calendar"
        visible={visible}
        layout='horizontal'
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
          },
        }}
      >
        <ProFormGroup
          colProps={{
          span: 24,
          }}
          
        >
          <ProFormText
              width="md"
              name="name"
              label="Calendar Name"
              placeholder="Calendar Name'"
              rules={[
                  {
                  required: true,
                  message: "Please input Calendar Name"
                  },
              ]}
          />
          <ProFormTextArea
              width="md"
              name="desc"
              label="Descriptions"
              placeholder="Descriptions"
          />
        </ProFormGroup>
        <EditableProTable<DataSourceType>
          rowKey="id"
          maxLength={5}
          scroll={{
            x: 960,
          }}
          rowSelection={{}}
          recordCreatorProps={false}
          loading={false}
          columns={columns}
          request={async () => ({
            data: defaultData,
            total: 3,
            success: true,
          })}
          value={dataSource}
          onChange={setDataSource}
          editable={{
            type: 'multiple',
            editableKeys,
            onSave: async (rowKey, data, row) => {
              console.log(rowKey, data, row);
            },
            onChange: setEditableRowKeys,
          }}
        />
      </ModalForm>
    </>
  );
};

export default CalendarModal;
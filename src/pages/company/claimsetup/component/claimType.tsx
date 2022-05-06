import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { ModalForm, ProFormCheckbox, ProFormGroup, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

type DataSourceType = {
  id: number;
  title?: string;
  selectable?: string;
  type?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 1,
    title: 'Clinic Name',
    selectable: 'true',
    type: 'MClaim',
  },
  {
    id: 2,
    title: 'Doctor Name',
    selectable: 'false',
    type: 'MClaim',
  },
];

interface CollectionCreateFormProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
}

const CalendarModal: React.FC<CollectionCreateFormProps> = ({ title, visible, onCancel }) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '#',
      dataIndex: 'id',
      readonly: true,
      width: '40px'
    },
    {
      title: 'Name',
      dataIndex: 'title',
    },

    {
      title: 'Required',
      dataIndex: 'selectable',
      valueType: 'select',
      valueEnum: {
        false: 'False',
        true: 'True',
      },
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        MClaim: 'Medical Claim',
        PClaim: 'Parking Claim',
        TClaim: 'Toll Claim',

      },
    },
    {
      title: 'Action',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          Delete
        </a>
      ],
    },
  ];

  return (
    <>
      <ModalForm
        className='claimType'
        modalProps={{
          onCancel: () => onCancel(),
        }}
        width={1050}
        title={title}
        visible={visible}
        layout='horizontal'
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
          },
        }}
      >
        <ProFormGroup
          // grid={true}
          colProps={{
            span: 24,
          }}
        >
          <ProFormText
            width="md"
            name="claimtype"
            label="Claim Type"
            placeholder="Claim Type"
            rules={[
              {
                required: true,
                message: "Please input Claim Type"
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
        <ProFormGroup
          // grid={true}
          colProps={{
            span: 24,
          }}
        >
          <ProFormCheckbox
            width="md"
            name="limited"
            label="Limited?"
          > Limited Claims Amount
          </ProFormCheckbox>
        </ProFormGroup>
        <EditableProTable<DataSourceType>
          rowKey="id"
          maxLength={5}
          // recordCreatorProps={{ lang: "en", creatorButtonText: "add row" }}
          recordCreatorProps={
            position !== 'hidden'
              ? {
                position: position as 'top',
                record: (id) => ({ id: id + 1 }),
                creatorButtonText: "Add row"
              }
              : false
          }
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
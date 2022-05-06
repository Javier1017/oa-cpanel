import type { FC } from 'react';
import { useState } from 'react';
import { Button, Switch } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { CalendarItem, calendarPagination } from './calendar/data';
import { claimgroup } from './calendar/service';
import type { MasterItem, masterPagination } from './master/data';
import { masterlist } from './master/service';
import type { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import MasterModal from './component/masterModal';
import CalendarModal from './component/calendarModal';
import './index.less';

const Calendar: FC = () => {
  const [activeKey, setActiveKey] = useState('master');
  const [title, setTitle] = useState('');
  const [master, setMaster] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columnsType: ProColumns<MasterItem>[] = [
    {
      title: 'Holiday',
      dataIndex: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
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
        return <a onClick={() => {setCalendar(true); setTitle('Edit Calendar Masterlist');}}>Edit</a>;
      },
    },
  ];

  const columnsGroup: ProColumns<CalendarItem>[] = [
    {
      title: 'Calendar Name',
      dataIndex: 'title',
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
        return <a onClick={() => {setCalendar(true);}}>Edit</a>;
      },
    },
  ];


  return (
    <PageContainer title={false}>
      <MasterModal
        title={title}
        visible={master}
        onCancel={() => setMaster(false)}
      />
      <CalendarModal
        visible={calendar}
        onCancel={() => setCalendar(false)}
      />
      {activeKey == 'master' &&
        <ProTable<MasterItem, masterPagination>
          // headerTitle="查询表格"
          // actionRef={actionRef}
          rowKey="key"
          search={false}
          cardBordered={true}
          pagination={paginationProps}
          request={masterlist}
          columns={columnsType}
          options={false}
          toolbar={{
            multipleLine: true,
            menu: {
              type: 'tab',
              activeKey: activeKey,
              onChange: (key) => setActiveKey(key as string),
              items: [
                {
                  key: 'master',
                  label: 'Master List',
                },
                {
                  key: 'calender',
                  label: 'Calender',
                },
              ]
            },
            actions: [
              <Button type="primary" key="add" icon={<PlusOutlined/>} onClick={() => {setMaster(true); setTitle('Add Calendar Masterlist');}}>
              Add
              </Button>
            ],
          }}
        />
      }
      {activeKey == 'calender' && 
        <ProTable<CalendarItem, calendarPagination>
        // headerTitle="查询表格"
        // actionRef={actionRef}
        rowKey="key"
        search={false}
        cardBordered={true}
        pagination={paginationProps}
        request={claimgroup}
        columns={columnsGroup}
        options={false}
        toolbar={{
          multipleLine: true,
          menu: {
            type: 'tab',
            activeKey: activeKey,
            onChange: (key) => setActiveKey(key as string),
            items: [
              {
                key: 'master',
                label: 'Master List',
              },
              {
                key: 'calender',
                label: 'Calender',
              },
            ]
          },
          actions: [
            <Button type="primary" key="add" icon={<PlusOutlined/>} onClick={() => {setCalendar(true);}}>
            Add
            </Button>
          ],
        }}
      />}
    </PageContainer>
  );
};

export default Calendar;

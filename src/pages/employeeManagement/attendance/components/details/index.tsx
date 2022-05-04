import type { FC } from 'react';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import ProDescriptions from '@ant-design/pro-descriptions';
import { data, time } from './data';
import './index.less';

interface Props {
  visible: boolean;
  close: () => void;
  approve: () => void;
}

const AttendanceDetails: FC<Props> = ({ visible, close, approve }) => {
  const [, setShowEdit] = useState(false);

  const renderFooter = [
    <Button key="approve" type="primary" danger onClick={() => approve()}>
      Approve
    </Button>,
    <Button key="Edit" type="primary" onClick={() => setShowEdit(true)}>
      Edit
    </Button>,
  ];

  const columns = [
    { title: 'Employee Code', dataIndex: 'employeeCode' },
    { title: 'Department', dataIndex: 'department' },
    { title: 'Employee', dataIndex: 'employee' },
    { title: 'Created Time', dataIndex: 'createdTime', valueType: 'dateTime' },
    { title: 'Location', dataIndex: 'location' },
    { title: 'Manual Entry Time', dataIndex: 'manualEntryTime' },
    { title: 'Remarks', dataIndex: 'remarks' },
  ];

  const timeColumns = [
    { title: 'Attendance Type', dataIndex: 'timeInType' },
    { title: 'Entry Time', dataIndex: 'timeInTime', valueType: 'dateTime' },
    { title: 'Attendance Type', dataIndex: 'lunchBreakType' },
    { title: 'Entry Time', dataIndex: 'lunchBreakTime', valueType: 'dateTime' },
    { title: 'Attendance Type', dataIndex: 'timeInAfterLunchType' },
    { title: 'Entry Time', dataIndex: 'timeInAfterLunchTime', valueType: 'dateTime' },
  ];

  const titleRender = () => {
    return <span className="time-details-title">Punched Time Details:</span>;
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={() => close()}
        title="Attendance Details"
        footer={renderFooter}
        width={1000}
      >
        <ProDescriptions
          column={2}
          request={async () => ({ data: data || {} })}
          columns={columns}
          labelStyle={{ paddingLeft: '50px' }}
        />
        <div className="mt-3">
          <ProDescriptions
            column={2}
            request={async () => ({ data: time || {} })}
            columns={timeColumns}
            title={titleRender()}
            labelStyle={{ paddingLeft: '50px' }}
          />
        </div>
      </Modal>
    </>
  );
};

export default AttendanceDetails;

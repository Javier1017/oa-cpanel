import type { FC } from 'react';
import { useState } from 'react';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';

const { Text, Title } = Typography;

const TimeLog: FC = () => {
  const [status, setStatus] = useState('working');

  const statusType = {
    working: 'success',
    'out for break': 'warning',
    'off work': 'secondary',
    overtime: 'danger',
  };

  const handleAction = () => {
    return status === 'working' ? setStatus('off work') : setStatus('working');
  };

  return (
    <>
      <div className="dashboard__timelog">
        <div className="dashboard__timelog__text">
          <Text>2022-04-25 13:00:09</Text>
        </div>
        <div className="dashboard__timelog__text--status">
          <Title level={5} type={statusType[status]}>
            {status}
          </Title>
        </div>
        <div className="dashboard__timelog__text">
          <Text>Logged In: 13:00:09</Text>
        </div>
        <div className="dashboard__timelog__text">
          <Text>Work Time Duration: 5 Hours 35 minutes</Text>
        </div>
        <div className="dashboard__timelog__action">
          <Button
            size="large"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => handleAction()}
          >
            {status === 'working' ? 'Time Out' : 'Time In'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default TimeLog;

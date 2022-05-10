import type { FC } from 'react';
import { Row, Col } from 'antd';
import TimeLog from './components/time-log';
import Shortcuts from './components/shortcuts';
import Leaves from './components/leaves';

const Dashboard: FC = () => {
  return (
    <>
      <Row gutter={[16, 48]}>
        <Col span={24}>
          <TimeLog />
        </Col>
        <Col span={24}>
          <Shortcuts />
        </Col>
        <Col span={24}>
          <Leaves />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

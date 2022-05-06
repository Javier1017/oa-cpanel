import type { FC } from 'react';
import { Row, Col } from 'antd';
import TimeLog from './components/time-log';

const Dashboard: FC = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <TimeLog />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

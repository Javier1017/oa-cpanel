import type { FC } from 'react';
import Chart from './chart';
import { Row, Col } from 'antd';
import chartData from './data';
import type { Props } from './chart';

const DashboardLeaves: FC = () => {
  return (
    <Row gutter={10}>
      {chartData.map((data: Props) => {
        return (
          <Col key={data.title} span={8}>
            <Chart
              title={data.title}
              type={data.type}
              data={data.data}
              countType={data.countType}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default DashboardLeaves;

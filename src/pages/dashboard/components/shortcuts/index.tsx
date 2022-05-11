import type { FC } from 'react';
import { Typography } from 'antd';
import './index.less';
import shortcuts from './data';
import { Row, Col } from 'antd';
import { Link } from 'umi';

const { Title } = Typography;

const DashboardShortcuts: FC = () => {
  return (
    <>
      <div className="dashboard__shortcuts">
        <div className="dashboard__shortcuts__header">
          <Title level={3}>Shortcut</Title>
        </div>
        <Row>
          {shortcuts.map(({ id, label, image, link }) => {
            return (
              <Col key={id} md={6}>
                <Link to={link}>
                  <div className="dashboard__shortcuts__item">
                    <img src={image} alt={label} />
                    <Title level={3}>{label}</Title>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default DashboardShortcuts;

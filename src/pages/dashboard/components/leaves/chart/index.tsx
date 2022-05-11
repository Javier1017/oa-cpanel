import type { FC } from 'react';
import { Pie } from '@ant-design/plots';
import './index.less';
import type { ChartProps } from './data.d';

const Chart: FC<ChartProps> = ({ data, title, countType }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{value}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <div className="chart">
      <p className="chart__title">{title}</p>
      <p className="chart__sub">{countType}</p>
      <Pie {...config} legend={false} />
    </div>
  );
};

export default Chart;

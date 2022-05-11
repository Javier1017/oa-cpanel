import type { ChartProps } from './chart/data.d';

const chartData: ChartProps[] = [
  {
    title: 'Offset Balances',
    type: 'offset',
    countType: 'hours',
    data: [
      {
        type: 'Available Balances',
        value: 2,
      },
      {
        type: 'Used',
        value: 10,
      },
    ],
  },
  {
    title: 'Sick Leave',
    type: 'sick',
    countType: 'days',
    data: [
      {
        type: 'Available Balances',
        value: 3,
      },
      {
        type: 'Used',
        value: 8,
      },
    ],
  },
  {
    title: 'Vacation Leave',
    type: 'vacation',
    countType: 'days',
    data: [
      {
        type: 'Available Balances',
        value: 8,
      },
      {
        type: 'Used',
        value: 15,
      },
    ],
  },
];

export default chartData;

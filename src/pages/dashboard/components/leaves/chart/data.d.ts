export interface Data {
  type: string;
  value: number;
}

export interface ChartProps {
  title: 'Offset Balances' | 'Sick Leave' | 'Vacation Leave';
  type: 'offset' | 'sick' | 'vacation';
  data: Data[];
  countType: 'days' | 'hours';
}

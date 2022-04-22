export type LeavesItem = {
  key: number;
  id: 'Balance' | 'Forfeited' | 'Entitled';
  annual: number;
  sick: number;
  emergency: number;
  vacation: number;
};

export type Pagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type Params = {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};

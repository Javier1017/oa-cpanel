export type MasterItem = {
  key: number;
  title: string;
  date: string;
  desc: string;
  status: boolean;
};

export type masterPagination = {
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

export type PositionAvailableItem = {
  key: number;
  id: number;
  position: string;
  department: string;
  createdTime: Date;
  author: string;
  status: number;
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

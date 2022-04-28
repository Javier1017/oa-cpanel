export type TypeItem = {
  key: number;
  type: string;
  gender: string;
  desc: string;
  limited: string;
  unpaid: string;
  status: boolean;
};

export type typePagination = {
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

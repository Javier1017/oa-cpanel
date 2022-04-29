export type ClaimItem = {
  key: number;
  type: string;
  desc: string;
  limited: string;
  status: boolean;
};

export type claimPagination = {
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

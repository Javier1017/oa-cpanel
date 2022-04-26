export type AllowanceItem = {
  key: number;
  id: number;
  employeeCode: string;
  employee: string;
  department: string;
  allowanceType: string;
  descriptions: string;
  sequence: string;
  amount: number;
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

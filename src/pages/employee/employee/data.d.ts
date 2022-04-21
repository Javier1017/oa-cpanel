export type EmployeeSetupItem = {
  key: number;
  employeeCode: string;
  employee: string;
  department: string;
  joinDate: number;
  IDnum: string,
  email: string;
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

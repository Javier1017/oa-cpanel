export type ScheduledAppliedItem = {
  key: number;
  id: number;
  candidateName: string;
  candidateNumber: string;
  email: string;
  position: string;
  createdTime: Date;
  interviewer: string;
  rank: number;
  approvalStatus: number;
  isScheduled: number;
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

import type { Request, Response } from 'express';
import { parse } from 'url';
import type { LeaveTransactionItem, Params } from './data.d';

// mock - generate withdrawal list
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: LeaveTransactionItem[] = [];
  const departmentArray = ['Admin', 'Sales', 'IT', 'HR', 'Marketing'];
  const leaveTypeArray = ['Annual Leave', 'Sick Leave', 'Urgent Leave', 'Non Paid Leave'];

  for (let i = 0; i < pageSize; i += 1) {
    const randomDepartment = Math.floor(Math.random() * departmentArray.length);
    const randomLeaveType = Math.floor(Math.random() * leaveTypeArray.length);
    tableListDataSource.push({
      id: Math.floor(1000 + Math.random() * 900000),
      key: i,
      employeeCode: '1298XXXXXXX',
      employee: `bluebear_${i}`,
      department: departmentArray[randomDepartment],
      leaveType: leaveTypeArray[randomLeaveType],
      appliedTime: Date.now() - Math.floor(Math.random() * 2000),
      from: Date.now() - Math.floor(Math.random() * 2000),
      to: Date.now() - Math.floor(Math.random() * 2000),
      days: Math.floor(1 + Math.random() * 5),
      status: Math.floor(Math.random() * 3),
    });
  }
  return tableListDataSource;
};

const tableListDataSource = genList(1, 100);

function getLeaveTransactions(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as Params;

  let dataSource = [...tableListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  if (params.sorter) {
    const sorter = JSON.parse(params.sorter as any);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach((key) => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }
  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as Record<string, string[]>;
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return Object.keys(filter).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  // if (params.name) {
  //   dataSource = dataSource.filter((data) => data.name.includes(params.name || ''));
  // }

  let finalPageSize = 10;
  if (params.pageSize) {
    finalPageSize = parseInt(`${params.pageSize}`, 10);
  }

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize: finalPageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /api/leave-transactions': getLeaveTransactions,
};

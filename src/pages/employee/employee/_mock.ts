import type { Request, Response } from 'express';
import { parse } from 'url';
import type { EmployeeSetupItem, Params } from './data.d';

const genList = () => {
  const tableListDataSource: EmployeeSetupItem[] = [];
  tableListDataSource.push(
    {
      key: 1,
      employeeCode: '001',
      employee: 'Apple',
      department: 'Admin',
      joinDate: Date.now() - Math.floor(Math.random() * 2000),
      IDnum: '123123456456',
      email: 'apple@gmail.com',
      status: 0,
    },
    {
      key: 2,
      employeeCode: '002',
      employee: 'Banana',
      department: 'IT',
      joinDate: Date.now(),
      IDnum: '321321654654',
      email: 'banana@gmail.com',
      status: 1,
    },
    {
      key: 3,
      employeeCode: '003',
      employee: 'Cranberry',
      department: 'Sales',
      joinDate: Date.now() - Math.floor(Math.random() * 2000),
      IDnum: '789789123123',
      email: 'cranberry@gmail.com',
      status: 2,
    },
    {
      key: 4,
      employeeCode: '004',
      employee: 'Durian',
      department: 'Marketing',
      joinDate: Date.now() - Math.floor(Math.random() * 2000),
      IDnum: '789789123123',
      email: 'durian@gmail.com',
      status: 3,
    },
    {
      key: 5,
      employeeCode: '005',
      employee: 'Fig',
      department: 'HR',
      joinDate: Date.now() - Math.floor(Math.random() * 2000),
      IDnum: '987987654654',
      email: 'fig@gmail.com',
      status: 4,
    },
    {
      key: 6,
      employeeCode: '006',
      employee: 'Guava',
      department: 'Logistic',
      joinDate: Date.now() - Math.floor(Math.random() * 2000),
      IDnum: '123456789123',
      email: 'guava@gmail.com',
      status: 5,
    },
  );
  return tableListDataSource;
};

const tableListDataSource = genList();

function getEmployeeSetup(req: Request, res: Response, u: string) {
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
  'GET /api/employee-setup': getEmployeeSetup,
};

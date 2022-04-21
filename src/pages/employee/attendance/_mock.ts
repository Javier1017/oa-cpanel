import type { Request, Response } from 'express';
import { parse } from 'url';
import type { EmployeeAttendanceItem, Params } from './data.d';

const genList = () => {
  const tableListDataSource: EmployeeAttendanceItem[] = [];
  tableListDataSource.push(
    {
      key: 1,
      type: 'Time In',
      desc: '9:00am',
    },
    {
      key: 2,
      type: 'Time Out',
      desc: '6:00pm',
    },
    {
      key: 3,
      type: 'Lunch Break',
      desc: '1Hour15Mins',
    },
    {
      key: 4,
      type: 'Dinner Break',
      desc: '1Hour',
    },
    {
      key: 5,
      type: 'OT1',
      desc: 'x1.5 pay',
    },
    {
      key: 6,
      type: 'OT2',
      desc: 'x2.0 pay',
    },
  );
  return tableListDataSource;
};

const tableListDataSource = genList();

function getEmployeeAttendance(req: Request, res: Response, u: string) {
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
  'GET /api/employee-attendance': getEmployeeAttendance,
};

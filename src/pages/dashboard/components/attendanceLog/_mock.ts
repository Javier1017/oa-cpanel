import type { Request, Response } from 'express';
import { parse } from 'url';
import type { AttendanceLogItem, Params } from './data.d';

const genList = () => {
  const tableListDataSource: AttendanceLogItem[] = [];
  tableListDataSource.push(
    {
      type: 'Schedule',
      key: Math.floor(Math.random() * 10000000),
      apr1: '09:00-18:00',
      apr2: '09:00-18:00',
      apr3: '09:00-18:00',
      apr4: '09:00-18:00',
      apr5: '09:00-18:00',
      apr6: '09:00-18:00',
      apr7: '09:00-18:00',
      apr8: '09:00-18:00',
      apr9: '09:00-18:00',
      apr10: '09:00-18:00',
    },
    {
      type: 'Hours',
      key: Math.floor(Math.random() * 10000000),
      apr1: Math.floor(Math.random() * 11),
      apr2: Math.floor(Math.random() * 11),
      apr3: Math.floor(Math.random() * 11),
      apr4: Math.floor(Math.random() * 11),
      apr5: Math.floor(Math.random() * 11),
      apr6: Math.floor(Math.random() * 11),
      apr7: Math.floor(Math.random() * 11),
      apr8: Math.floor(Math.random() * 11),
      apr9: Math.floor(Math.random() * 11),
      apr10: Math.floor(Math.random() * 11),
    },
    {
      type: 'Time',
      key: Math.floor(Math.random() * 10000000),
      apr1: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr2: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr3: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr4: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr5: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr6: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr7: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr8: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr9: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
      apr10: ['08:45-12:03', '12:03-13:00', '13:01-18:05', '18:06-20:06'],
    },
  );
  return tableListDataSource;
};

const tableListDataSource = genList();

function getAttendanceLog(req: Request, res: Response, u: string) {
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
    dataSource = dataSource.sort((prev: any, next: any) => {
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
  'GET /api/attendance-log': getAttendanceLog,
};

import type { Request, Response } from 'express';
import { parse } from 'url';
import type { LibraryItem, Params } from './data.d';

const genList = () => {
  const tableListDataSource: LibraryItem[] = [];
  tableListDataSource.push(
    {
      key: 1,
      title: 'Employee Handbook',
      author: 'admin',
      desc: 'V1.0',
      date: Date.now() - Math.floor(Math.random() * 2000),
    },
    {
      key: 2,
      title: 'Claim Form',
      author: 'admin',
      desc: 'Allowance',
      date: Date.now() - Math.floor(Math.random() * 2000),
    },
    {
      key: 3,
      title: 'Leave Application Form',
      author: 'admin',
      desc: 'AL',
      date: Date.now() - Math.floor(Math.random() * 2000),
    },
    {
      key: 4,
      title: 'Laptop setup',
      author: 'Infra',
      desc: 'Guide',
      date: Date.now() - Math.floor(Math.random() * 2000),
    },
    {
      key: 5,
      title: 'Medical From',
      author: 'admin',
      desc: 'Health',
      date: Date.now() - Math.floor(Math.random() * 2000),
    },
    {
      key: 6,
      title: 'EA Form',
      author: 'admin',
      desc: 'Income tax',
      date: Date.now() - Math.floor(Math.random() * 2000),
    },
  );
  return tableListDataSource;
};

const tableListDataSource = genList();

function getLibrary(req: Request, res: Response, u: string) {
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
  'GET /api/library': getLibrary,
};

import type { Request, Response } from 'express';
import { parse } from 'url';
import type { DeductionItem, Params } from './data.d';

// mock - generate withdrawal list
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: DeductionItem[] = [];
  const sequenceArray = ['First Half', 'Second Half'];

  for (let i = 0; i < pageSize; i += 1) {
    tableListDataSource.push({
      id: Math.floor(1000 + Math.random() * 900000),
      key: i,
      employeeCode: '1298XXXXXXX',
      employee: `bluebear_${i}`,
      department: `Department ${i}`,
      deductionType: `Type ${i}`,
      descriptions: `Description ${i}`,
      sequence: sequenceArray[Math.floor(Math.random() * 2)],
      amount: Math.floor(Math.random() * 1000),
    });
  }
  return tableListDataSource;
};

const tableListDataSource = genList(1, 100);

function getDeductions(req: Request, res: Response, u: string) {
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
  'GET /api/deductions': getDeductions,
};

import type { Request, Response } from 'express';
import { parse } from 'url';
import type { PositionAppliedItem, Params } from './data.d';

const genList = (current: number, pageSize: number) => {
  const tableListDataSource: PositionAppliedItem[] = [];
  const positionApplied = ['Admin', 'Sales', 'IT', 'HR', 'Marketing'];

  for (let i = 0; i < pageSize; i += 1) {
    const randomPosition = Math.floor(Math.random() * positionApplied.length);

    tableListDataSource.push({
      id: Math.floor(1000 + Math.random() * 900000),
      key: i,
      candidateName: `scheduled ${i}`,
      candidateNumber: '1298XXXXXXX',
      email: `employee@email.com`,
      position: positionApplied[randomPosition],
      createdTime: new Date(),
      interviewer: `interviewer ${i}`,
      rank: Math.floor(Math.random() * 10),
      approvalStatus: Math.floor(Math.random() * 3),
    });
  }
  return tableListDataSource;
};

const tableListDataSource = genList(1, 5);

function getInterviewCandidates(req: Request, res: Response, u: string) {
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
  'GET /api/interview-scheduled': getInterviewCandidates,
};

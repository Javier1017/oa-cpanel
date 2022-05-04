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
      candidateName: `candidate ${i}`,
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

const tableListDataSource = genList(1, 100);

function getInterviewCandidates(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as Params;
  console.log({ params });

  let dataSource = [...tableListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  // if (Object.keys(params).length > 0) {
  //   dataSource = dataSource.filter((item) => {
  //     return Object.keys(params).some((key) => {
  //       if (!params[key]) {
  //         return true;
  //       }
  //       if (params[key].includes(`${item[key]}`)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   });
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
  'GET /api/interview-candidate': getInterviewCandidates,
};

import type { Request, Response } from 'express';
import { parse } from 'url';
import type { ClaimTransactionItem, Params } from './data.d';

// mock - generate withdrawal list
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: ClaimTransactionItem[] = [];
  const departmentArray = ['Admin', 'Sales', 'IT', 'HR', 'Marketing'];
  const claimTypeArray = [
    'Medical Claim',
    'Parking Claim',
    'Toll Claim',
    'Office Claim',
    'Social Claim',
    'Meals Claim',
    'Miscellaneous Claim',
  ];

  for (let i = 0; i < pageSize; i += 1) {
    const randomDepartment = Math.floor(Math.random() * departmentArray.length);
    const randomClaimType = Math.floor(Math.random() * claimTypeArray.length);
    tableListDataSource.push({
      id: Math.floor(1000 + Math.random() * 900000),
      key: i,
      employeeCode: '1298XXXXXXX',
      employee: `bluebear_${i}`,
      department: departmentArray[randomDepartment],
      claimType: claimTypeArray[randomClaimType],
      month: 'April',
      amount: Math.floor(Math.random() * 1000),
      approvedAmount: Math.floor(Math.random() * 900),
      approvalStatus: Math.floor(Math.random() * 3),
      claimStatus: Math.floor(Math.random() * 3),
      clinicName: `Clinic ${Math.floor(Math.random() * 1000)}`,
      doctorName: `Dr. ${Math.floor(Math.random() * 1000)}`,
      claimFor: 'XXXXX',
    });
  }
  return tableListDataSource;
};

const tableListDataSource = genList(1, 100);

function getClaimTransactions(req: Request, res: Response, u: string) {
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
  'GET /api/claim-transactions': getClaimTransactions,
};

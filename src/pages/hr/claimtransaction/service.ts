import { request } from 'umi';
import type { ClaimTransactionItem } from './data';

export async function claimTransaction(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<{
    data: ClaimTransactionItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/claim-transactions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

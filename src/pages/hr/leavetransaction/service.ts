import { request } from 'umi';
import type { LeaveTransactionItem } from './data';

export async function leaveTransactions(
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
    data: LeaveTransactionItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/leave-transactions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

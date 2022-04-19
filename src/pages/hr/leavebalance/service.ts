import { request } from 'umi';
import type { LeaveBalanceItem } from './data';

export async function leaveBalance(
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
    data: LeaveBalanceItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/leave-balances', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

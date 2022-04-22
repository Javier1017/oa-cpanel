import { request } from 'umi';
import type { LeavesItem } from './data';

export async function detailedBalance(
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
    data: LeavesItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/leave-balances/detailed', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

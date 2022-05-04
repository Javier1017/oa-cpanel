import { request } from 'umi';
import type { CommissionItem } from './data';

export async function commissions(
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
    data: CommissionItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/commissions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

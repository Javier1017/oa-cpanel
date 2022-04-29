import { request } from 'umi';
import type { ClaimItem } from './data';

export async function claimtype(
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
    data: ClaimItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/claimType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

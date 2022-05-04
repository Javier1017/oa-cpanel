import { request } from 'umi';
import type { BonusItem } from './data';

export async function bonus(
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
    data: BonusItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/bonus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

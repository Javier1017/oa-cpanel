import { request } from 'umi';
import type { BanksItem } from './data';

export async function banks(
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
    data: BanksItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/banks', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

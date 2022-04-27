import { request } from 'umi';
import type { RemunerationItem } from './data';

export async function remunerations(
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
    data: RemunerationItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/remunerations', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

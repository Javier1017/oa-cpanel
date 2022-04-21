import { request } from 'umi';
import type { QualificationItem } from './data';

export async function qualification(
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
    data: QualificationItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/qualification', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

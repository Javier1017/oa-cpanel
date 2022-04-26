import { request } from 'umi';
import type { AllowanceItem } from './data';

export async function allowance(
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
    data: AllowanceItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/allowance', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

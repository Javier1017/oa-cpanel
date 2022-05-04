import { request } from 'umi';
import type { DeductionItem } from './data';

export async function deductions(
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
    data: DeductionItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/deductions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

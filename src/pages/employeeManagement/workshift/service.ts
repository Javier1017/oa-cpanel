import { request } from 'umi';
import type { WorkShiftItem } from './data';

export async function workShifts(
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
    data: WorkShiftItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/work-shift', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

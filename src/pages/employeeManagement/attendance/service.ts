import { request } from 'umi';
import type { AttendanceItem } from './data';

export async function assets(
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
    data: AttendanceItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/attendance', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

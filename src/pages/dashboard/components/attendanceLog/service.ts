import { request } from 'umi';
import type { AttendanceLogItem } from './data';

export async function attendanceLog(
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
    data: AttendanceLogItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/attendance-log', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

import { request } from 'umi';
import type { EmployeeAttendanceItem } from './data';

export async function employeeattendance(
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
    data: EmployeeAttendanceItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/employee-attendance', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

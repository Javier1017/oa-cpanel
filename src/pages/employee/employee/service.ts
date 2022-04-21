import { request } from 'umi';
import type { EmployeeSetupItem } from './data';

export async function employeesetup(
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
    data: EmployeeSetupItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/employee-setup', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

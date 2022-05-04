import { request } from 'umi';
import type { TypeItem } from './data';

export async function leavetype(
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
    data: TypeItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/leaveType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

import { request } from 'umi';
import type { GroupItem } from './data';

export async function leavegroup(
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
    data: GroupItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/leaveGroup', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

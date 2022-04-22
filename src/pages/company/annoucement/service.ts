import { request } from 'umi';
import type { AnnouncementItem } from './data';

export async function annoucement(
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
    data: AnnouncementItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/annoucement', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

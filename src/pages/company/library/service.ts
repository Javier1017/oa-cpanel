import { request } from 'umi';
import type { LibraryItem } from './data';

export async function library(
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
    data: LibraryItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/library', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

import { request } from 'umi';
import type { WorkReportItem } from './data';

export async function workreport(
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
    data: WorkReportItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/work-report', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

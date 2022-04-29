import { request } from 'umi';
import type { SettingItem } from './data';

export async function claimsetting(
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
    data: SettingItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/claimSetting', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

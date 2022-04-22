import { request } from 'umi';
import type { PositionAvailableItem } from './data';

export async function interviewCandidates(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<{
    data: PositionAvailableItem[];
    total?: number;
    success?: boolean;
  }>('/api/interview-position', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

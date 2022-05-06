import { request } from 'umi';
import type { PositionAppliedItem } from './data';

export async function interviewCandidates(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<{
    data: PositionAppliedItem[];
    total?: number;
    success?: boolean;
  }>('/api/interview-candidate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

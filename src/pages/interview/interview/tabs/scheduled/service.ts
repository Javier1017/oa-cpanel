import { request } from 'umi';
import type { ScheduledAppliedItem } from '../../data';

export async function interviewCandidates(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<{
    data: ScheduledAppliedItem[];
    total?: number;
    success?: boolean;
  }>('/api/interview-scheduled', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

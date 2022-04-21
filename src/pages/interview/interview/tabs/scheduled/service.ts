import { request } from 'umi';
import type { PositionAppliedItem } from './data';

export async function interviewCandidates(
  params: {
    current?: number;
    pageSize?: number;
    interviewType?: string;
  },
  options?: Record<string, any>,
) {
  return request<{
    data: PositionAppliedItem[];
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

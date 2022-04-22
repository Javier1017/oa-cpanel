import type { ScheduledAppliedItem } from '../../data';
import { interviewCandidates } from './service';
import type { ProColumns } from '@ant-design/pro-table';

import { Link } from 'umi';

export function interviewScheduled() {
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
    // total: list.length,
  };

  const columns: ProColumns<ScheduledAppliedItem>[] = [
    {
      title: 'Name',
      dataIndex: 'candidateName',
    },
    {
      title: 'ID Number',
      dataIndex: 'candidateNumber',
    },
    {
      title: 'Position Applied',
      dataIndex: 'position',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Interview Time',
      dataIndex: 'createdTime',
    },
    {
      title: 'Interviewer',
      dataIndex: 'interviewer',
    },

    {
      title: 'Actions',
      dataIndex: 'id',
      hideInSearch: true,
      render: (_, item) => {
        return <Link to={{ pathname: `/interview/candidate/pages/view/${item.id}` }}>View</Link>;
      },
    },
  ];

  return { paginationProps, interviewCandidates, columns };
}

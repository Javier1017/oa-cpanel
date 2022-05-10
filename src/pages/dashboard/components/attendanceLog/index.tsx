import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { attendanceLog } from './service';
import type { AttendanceLogItem, Pagination } from './data.d';

const DashboardAttendanceLog = () => {
  const columns: ProColumns<AttendanceLogItem>[] = [
    {
      title: '',
      width: 100,
      dataIndex: 'type',
      key: 'type',
      fixed: 'left',
      align: 'center',
    },
    {
      title: 'Apr 1',
      dataIndex: 'apr1',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 2',
      dataIndex: 'apr2',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 3',
      dataIndex: 'apr3',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 4',
      dataIndex: 'apr4',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 5',
      dataIndex: 'apr5',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 6',
      dataIndex: 'apr6',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 7',
      dataIndex: 'apr7',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 8',
      dataIndex: 'apr8',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 9',
      dataIndex: 'apr9',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
    {
      title: 'Apr 10',
      dataIndex: 'apr10',
      align: 'center',
      render: (dom) => {
        if (Array.isArray(dom)) {
          return (
            <>
              {dom.map((v) => {
                return (
                  <p style={{ marginBottom: 0 }} key={v}>
                    {v}
                  </p>
                );
              })}
            </>
          );
        } else {
          return dom;
        }
      },
    },
  ];

  return (
    <>
      <ProTable<AttendanceLogItem, Pagination>
        columns={columns}
        options={false}
        pagination={false}
        search={false}
        request={attendanceLog}
        scroll={{ x: 1300 }}
      />
    </>
  );
};

export default DashboardAttendanceLog;

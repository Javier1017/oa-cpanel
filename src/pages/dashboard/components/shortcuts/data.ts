import Announcement from '@/assets/img/dashboard/shortcuts/announcement.svg';
import Assets from '@/assets/img/dashboard/shortcuts/assets.svg';
import Attendance from '@/assets/img/dashboard/shortcuts/attendance.svg';
import Claim from '@/assets/img/dashboard/shortcuts/claim.svg';
import Leave from '@/assets/img/dashboard/shortcuts/leave.svg';
import Library from '@/assets/img/dashboard/shortcuts/library.svg';
import Payslip from '@/assets/img/dashboard/shortcuts/payslip.svg';
import WorkReports from '@/assets/img/dashboard/shortcuts/work-reports.svg';

export default [
  {
    id: 1,
    label: 'Attendance',
    image: Attendance,
    link: '/main/employeeManagement/employeemanagement/attendance',
  },
  {
    id: 2,
    label: 'Claim',
    image: Claim,
    link: '/main/hr/claimtransaction',
  },
  {
    id: 3,
    label: 'Work Reports',
    image: WorkReports,
    link: '/main/employeeManagement/employeeManagement/workreport',
  },
  {
    id: 4,
    label: 'Leave',
    image: Leave,
    link: '/main/hr/leavetransaction',
  },
  {
    id: 5,
    label: 'Announcement',
    image: Announcement,
    link: '/dashboard',
  },
  {
    id: 6,
    label: 'Library',
    image: Library,
    link: '/dashboard',
  },
  {
    id: 7,
    label: 'Assets',
    image: Assets,
    link: '/main/employeeManagement/employeeManagement/assets',
  },
  {
    id: 8,
    label: 'Payslip',
    image: Payslip,
    link: '/main/payroll/generate-payroll',
  },
];

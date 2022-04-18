export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: './dashboard/',
  },
  {
    path: '/main',
    name: 'Main',
    component: './main/',
  },
  {
    path: '/payroll',
    name: 'Payroll',
    component: './payroll/',
  },
  {
    path: '/hr',
    name: 'HR',
    routes: [
      {
        path: '/hr',
        redirect: '/hr/leavetransaction',
      },
      {
        name: 'Leave Transaction',
        path: '/hr/leavetransaction',
        component: './hr/leavetransaction',
      },
      {
        name: 'Leave Balance',
        path: '/hr/leavebalance',
        component: './hr/leavebalance',
      },
      {
        name: 'Claim Transaction',
        path: '/hr/claimtransaction',
        component: './hr/claimtransaction',
      },
    ],
  },
  {
    path: '/employeeManagement',
    name: 'Employee Management',
    routes: [
      {
        path: '/employeeManagement',
        redirect: '/employeeManagement/attendance',
      },
      {
        name: 'Attendance Lists',
        path: '/employeemanagement/attendance',
        component: './employeeManagement/attendance',
      },
      {
        name: 'Work Report Lists',
        path: '/employeeManagement/workreport',
        component: './employeeManagement/workreport',
      },
      {
        name: 'Assets Lists',
        path: '/employeeManagement/assets',
        component: './employeeManagement/assets',
      },
    ],
  },
  {
    path: '/setup',
    name: 'Setup',
    component: './setup/',
  },
  {
    path: '/employee',
    name: 'Employee',
    routes: [
      {
        path: '/employee',
        redirect: '/employee/employee',
      },
      {
        name: 'Employee Setup',
        path: '/employee/employee',
        component: './employee/employee',
      },
      {
        name: 'Attendance Setup',
        path: '/employee/attendance',
        component: './employee/attendance',
      },
      {
        name: 'Work Report Setup',
        path: '/employee/workreport',
        component: './employee/workreport',
      },
      {
        name: 'Qualifications',
        path: '/employee/qualifications',
        component: './employee/qualifications',
      },
    ],
  },
  {
    path: '/company',
    name: 'Company',
    routes: [
      {
        path: '/company',
        redirect: '/company/companyprofile',
      },
      {
        name: 'Company Profile',
        path: '/company/companyprofile',
        component: './company/companyprofile',
      },
      {
        name: 'Department',
        path: '/company/department',
        component: './company/department',
      },
      {
        name: 'Calendar',
        path: '/company/calendar',
        component: './company/calendar',
      },
      {
        name: 'Leave Setup',
        path: '/company/leavesetup',
        component: './company/leavesetup',
      },
      {
        name: 'Leave Setting',
        path: '/company/leavesetting',
        component: './company/leavesetting',
      },
      {
        name: 'Annoucement',
        path: '/company/annoucement',
        component: './company/annoucement',
      },
      {
        name: 'Claim Setup',
        path: '/company/claimsetup',
        component: './company/claimsetup',
      },
      {
        name: 'Claim Setting',
        path: '/company/claimsetting',
        component: './company/claimsetting',
      },
      {
        name: 'Assets Setup',
        path: '/company/assets',
        component: './company/assets',
      },
      {
        name: 'Library',
        path: '/company/library',
        component: './company/library',
      },
      {
        name: 'Setting',
        path: '/company/setting',
        component: './company/setting',
      },
    ],
  },
  {
    path: '/interview',
    name: 'Interview',
    routes: [
      {
        path: '/interview',
        redirect: '/interview/candidate',
      },
      {
        name: 'Candidate',
        path: '/interview/candidate',
        component: './interview/candidate',
      },
      {
        name: 'Interview',
        path: '/interview/interview',
        component: './interview/interview',
      },
      {
        name: 'Position',
        path: '/interview/position',
        component: './interview/position',
      },
    ],
  },
  {
    path: '/reports',
    name: 'Reports',
    component: './reports/',
  },
  {
    path: '/security',
    name: 'Security',
    routes: [
      {
        path: '/security',
        redirect: '/security/account',
      },
      {
        name: 'Account',
        path: '/security/account',
        component: './security/account',
      },
      {
        name: 'User Roles',
        path: '/security/userroles',
        component: './security/userroles',
      },
      {
        name: 'Users',
        path: '/security/users',
        component: './security/users',
      },
      {
        name: 'Account Center',
        path: '/security/accountcenter',
        component: './security/accountcenter',
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'UserOutlined',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  // {
  //   component: './404',
  // },
];

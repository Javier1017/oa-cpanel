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
    routes: [
      {
        path: 'payroll',
        name: 'Payroll',
        routes: [
          {
            path: 'generate-payroll',
            name: 'Generate Payroll',
            component: './payroll/generate',
          },
          {
            path: 'commissions',
            name: 'Commissions',
            component: './payroll/commissions',
          },
          {
            path: 'bonus',
            name: 'Bonus',
            component: './payroll/bonus',
          },
          {
            path: 'allowance',
            name: 'Allowance',
            component: './payroll/allowance',
          },
          {
            path: 'deduction',
            name: 'Deduction',
            component: './payroll/deduction',
          },
          {
            path: 'remuneration',
            name: 'Additional Remuneration',
            component: './payroll/remuneration',
          },
        ],
      },
      {
        path: 'hr',
        name: 'HR',
        routes: [
          {
            path: '/hr',
            redirect: '/hr/leavetransaction',
          },
          {
            name: 'Leave Transaction',
            path: 'leavetransaction',
            component: './hr/leavetransaction',
          },
          {
            name: 'Leave Balance',
            path: 'leavebalance',
            component: './hr/leavebalance',
          },
          {
            name: 'Claim Transaction',
            path: 'claimtransaction',
            component: './hr/claimtransaction',
          },
        ],
      },
      {
        path: 'employeeManagement',
        name: 'Employee Management',
        routes: [
          {
            path: 'employeeManagement',
            redirect: '/employeeManagement/attendance',
          },
          {
            name: 'Attendance Lists',
            path: 'employeemanagement/attendance',
            component: './employeeManagement/attendance',
          },
          {
            name: 'Work Report Lists',
            path: 'employeeManagement/workreport',
            component: './employeeManagement/workreport',
          },
          {
            name: 'Assets Lists',
            path: 'employeeManagement/assets',
            component: './employeeManagement/assets',
          },
        ],
      },
    ],
  },
  {
    path: '/setup',
    name: 'Setup',
    routes: [
      {
        path: 'employee',
        name: 'Employee',
        routes: [
          {
            path: '/employee',
            redirect: '/employee/employee',
          },
          {
            name: 'Employee Setup',
            path: 'employeesetup',
            component: './employee/employee',
          },
          {
            name: 'Attendance Setup',
            path: 'attendance',
            component: './employee/attendance',
          },
          {
            name: 'Work Report Setup',
            path: 'workreport',
            component: './employee/workreport',
          },
          {
            name: 'Qualifications',
            path: 'qualifications',
            component: './employee/qualifications',
          },
        ],
      },
      {
        path: 'company',
        name: 'Company',
        routes: [
          {
            path: 'company',
            redirect: '/company/companyprofile',
          },
          {
            name: 'Company Profile',
            path: 'companyprofile',
            component: './company/companyprofile',
          },
          {
            name: 'Banks',
            path: 'banks',
            component: './company/banks',
          },
          {
            name: 'Department',
            path: 'department',
            component: './company/department',
          },
          {
            name: 'Calendar',
            path: 'calendar',
            component: './company/calendar',
          },
          {
            name: 'Leave Setup',
            path: 'leavesetup',
            component: './company/leavesetup',
          },
          {
            name: 'Leave Setting',
            path: 'leavesetting',
            component: './company/leavesetting',
          },
          {
            name: 'Annoucement',
            path: 'annoucement',
            component: './company/annoucement',
          },
          {
            name: 'Claim Setup',
            path: 'claimsetup',
            component: './company/claimsetup',
          },
          {
            name: 'Claim Setting',
            path: 'claimsetting',
            component: './company/claimsetting',
          },
          {
            name: 'Assets Setup',
            path: 'assets',
            component: './company/assets',
          },
          {
            name: 'Library',
            path: 'library',
            component: './company/library',
          },
          {
            name: 'Setting',
            path: 'setting',
            component: './company/setting',
          },
        ],
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
        path: '/interview/candidate/pages/add',
        component: './interview/candidate/pages/add',
      },
      {
        path: '/interview/candidate/pages/view/:id',
        component: './interview/candidate/pages/view',
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

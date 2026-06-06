export interface SidebarItem {
  label: string;
  path: string;
  permission: string;
}

export interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

export const sidebarGroups: SidebarGroup[] = [
  {
    label: 'Domains',
    items: [
      {
        label: 'Analytics',
        path: '/analytics',
        permission: 'VIEW_ANALYTICS',
      },
      {
        label: 'Patients',
        path: '/patients',
        permission: 'VIEW_PATIENT',
      },
      {
        label: 'Doctors',
        path: '/doctors',
        permission: 'MANAGE_DOCTORS',
      },
      {
        label: 'Appointments',
        path: '/appointments',
        permission: 'VIEW_APPOINTMENT',
      },
      {
        label: 'Billing',
        path: '/billing',
        permission: 'VIEW_BILLING',
      },
    ],
  },
  {
    label: 'Administration',
    items: [
      {
        label: 'Users',
        path: '/users',
        permission: 'MANAGE_USERS',
      },
      {
        label: 'Roles',
        path: '/roles',
        permission: 'MANAGE_ROLES',
      },
    ],
  },
];

// export const sidebarItems: SidebarItem[] = [
//   {
//     label: 'Analytics',

//     path: '/analytics',

//     permission: 'VIEW_ANALYTICS',
//   },

//   {
//     label: 'Users',

//     path: '/users',

//     permission: 'MANAGE_USERS',
//   },

//   {
//     label: 'Roles',

//     path: '/roles',

//     permission: 'MANAGE_ROLES',
//   },

//   {
//     label: 'Patients',

//     path: '/patients',

//     permission: 'VIEW_PATIENT',
//   },

//   {
//     label: 'Doctors',

//     path: '/doctors',

//     permission: 'MANAGE_DOCTORS',
//   },

//   {
//     label: 'Appointments',

//     path: '/appointments',

//     permission: 'VIEW_APPOINTMENT',
//   },
//   {
//     label: 'Billing',

//     path: '/billing',

//     permission: 'VIEW_BILLING',
//   },
// ];

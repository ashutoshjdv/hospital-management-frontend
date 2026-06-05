export interface SidebarItem {
  label: string;
  path: string;
  permission: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    label: 'Analytics',

    path: '/analytics',

    permission: 'VIEW_ANALYTICS',
  },

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
];

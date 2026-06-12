// import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
// import React, { useEffect, useState } from 'react';
// import { fetchUserData } from '../api/UserAPI';
import { SkeletonTable } from '@/shared/components/SharedTable';
import { Badge } from '@/components/ui/badge';
import { DataTable } from '@/shared/components/sharedCustomTable/SharedCustomTable';
import type { Column } from '@/shared/components/sharedCustomTable/Types';
import type { User } from '../types/UserTypes';
import UserActionsMenu from './UserActionsMenu';
import { useUsers } from '../hooks/useUsers';

const UserPage = () => {
  // const users = useAppSelector((state) => state.user.users);
  const {
    data: users = [],

    isLoading,
  } = useUsers();

  const columns: Column<User>[] = [
    { key: 'email', label: 'Email' },
    {
      key: 'status',
      label: 'Status',
      position: 'center',
      render: (value) => (
        <Badge variant={value === 'ACTIVE' ? 'default' : 'destructive'} className="p-3">
          {' '}
          {value === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE'}
        </Badge>
      ),
    },
    {
      key: 'roles',

      label: 'Roles',
      position: 'center',
      onlyBigScreen: true,

      render: (_, row) => (
        <div className="flex flex-wrap gap-1 justify-center">
          {row.roles?.map((role) => (
            <Badge key={role.id} variant="secondary" className="p-3">
              {role.name.replaceAll('_', ' ')}
            </Badge>
          ))}
        </div>
      ),
    },
    // {
    //   key: 'emailVerified',
    //   label: 'Email Verified',
    //   position: 'center',
    //   onlyBigScreen: true,
    //   render: (value) => (
    //     <Badge variant={value === true ? 'default' : 'secondary'} className="p-3">
    //       {value === true ? 'VERIFIED' : 'NOT VERIFIED'}
    //     </Badge>
    //   ),
    // },
  ];

  return (
    <div className="p-2 lg:p-5 cn-card">
      {isLoading ? (
        <SkeletonTable length={10} />
      ) : (
        <DataTable
          columns={columns}
          data={users ?? []}
          loading={isLoading}
          rowActions={(user) => <UserActionsMenu user={user} />}
        />
        // <SharedTable
        //   title="Users"
        //   headers={[
        //     { id: 'name', name: 'Name' },
        //     { id: 'status', name: 'Status' },
        //     { id: 'isVerified', name: 'Email Verified' },
        //   ]}
        //   data={
        //     users
        //       ? users.map((user) => ({
        //           email: user.email,
        //           status: user.status,
        //           isVerified: user.isEmailVerified ? 'Yes' : 'No',
        //         }))
        //       : []
        //   }
        // />
      )}
    </div>
  );
};

export default UserPage;

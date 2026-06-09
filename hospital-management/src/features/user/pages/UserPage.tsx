import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../api/UserAPI';
import { setUsersData } from '../store/UserSlice';
import { SkeletonTable } from '@/shared/components/SharedTable';
import { Badge } from '@/components/ui/badge';
import { DataTable } from '@/shared/components/sharedCustomTable/SharedCustomTable';
import type { Column } from '@/shared/components/sharedCustomTable/Types';
import type { User } from '../types/UserTypes';
import UserActionsMenu from './UserActionsMenu';

const UserPage = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  const users = useAppSelector((state) => state.user.users);

  const columns: Column<User>[] = [
    { key: 'email', label: 'Email' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <Badge>{value ? 'ACTIVE' : 'INACTIVE'}</Badge>,
    },
    {
      key: 'isEmailVerified',
      label: 'Email Verified',
      render: (value) => <Badge>{value ? 'VERIFIED' : 'NOT VERIFIED'}</Badge>,
    },
  ];

  useEffect(() => {
    // Fetch user data from the backend and update the Redux store
    fetchUserData()
      .then((users) => {
        dispatch(setUsersData(users));
      })
      .catch((err) => {
        console.error('Failed to load user data:', err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Adding a small delay to show the skeleton loader
      });
  }, []);
  return (
    <div className="p-5">
      {loading ? (
        <SkeletonTable length={10} />
      ) : (
        <DataTable
          columns={columns}
          data={users ?? []}
          loading={loading}
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

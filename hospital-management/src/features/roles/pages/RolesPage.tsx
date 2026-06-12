// import DataList from '@/shared/components/sharedCustomList/SharedCustomList';
import React, { useEffect, useState } from 'react';
import RoleCard from './RoleCard';
import { useRoles } from '../hooks/useRoles';
import RolePageToolBar from './RolePageToolBar';
// import AssignPermissionsDialog from './RolesDialog';
import RolesDialog from './RolesDialog';
import type { Role } from '../types/RoleTypes';

interface RoleDialogState {
  type: 'add' | 'update';
  open: boolean;
  role?: Role;
}
const RolesPage = () => {
  const { data: roles = [] } = useRoles();

  const [search, setSearch] = useState('');

  const [roleDialog, setRoleDialog] = useState<RoleDialogState>({
    open: false,
    type: 'add',
  });

  const filteredData = roles.filter((role) =>
    [role.name.replaceAll('_', ' '), role.description]

      .join(' ')

      .toLowerCase()

      .includes(search.trim().toLowerCase()),
  );

  useEffect(() => {
    // setPage(1);
  }, [search]);

  return (
    <>
      <RolesDialog
        open={roleDialog.open}
        type={roleDialog.type}
        role={roleDialog.role}
        onOpenChange={(open) =>
          setRoleDialog((prev) => ({
            ...prev,

            open,
          }))
        }
      />
      <RolePageToolBar
        search={search}
        onSearchChange={setSearch}
        dataLength={filteredData.length}
        onAddRole={() =>
          setRoleDialog({
            open: true,

            type: 'add',
          })
        }
      />
      {/* <DataList /> */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 md:m-5">
        {filteredData.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onEdit={() =>
              setRoleDialog({
                open: true,
                type: 'update',
                role,
              })
            }
          />
        ))}
      </div>
    </>
  );
};

export default RolesPage;

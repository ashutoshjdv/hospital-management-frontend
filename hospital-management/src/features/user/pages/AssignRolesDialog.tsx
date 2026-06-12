import React, { useEffect, useState } from 'react';
import type { AssignRolesDialogProp } from '../types/UserTypes';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useRoles } from '@/features/roles/hooks/useRoles';
import { useAssignRoles } from '../hooks/useAssignRoles';
import { SelectSeparator } from '@/components/ui/select';
// import { useAppSelector } from '@/app/hooks/redux';

const AssignRolesDialog = ({ user, open, onOpenChange }: AssignRolesDialogProp) => {
  // const roles = useAppSelector((state) => state.role.roles);

  const { mutateAsync, isPending } = useAssignRoles();

  const { data: roles = [] } = useRoles();

  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedRoles(user.roles.map((role) => role.id));
  }, [user]);

  const toggleRole = (roleId: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleId) ? prev.filter((id) => id !== roleId) : [...prev, roleId],
    );
  };

  const handleSave = async () => {
    try {
      await mutateAsync({
        userId: user.id,

        roleIds: selectedRoles,
      });

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="md:px-3 md:pt-3 text-primary text-xl">Assign Roles</DialogTitle>
            <SelectSeparator />
          </DialogHeader>

          <div className="max-md:space-y-4 space-x-2 grid grid-cols-2">
            {roles.map((role) => (
              <div key={role.id} className="flex items-center gap-2 md:p-3">
                <Checkbox
                  checked={selectedRoles.includes(role.id)}
                  onCheckedChange={() => toggleRole(role.id)}
                />

                <span>{role.name.replaceAll('_', ' ')}</span>
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>

            <Button onClick={handleSave}>{isPending ? 'Saving...' : 'Save'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssignRolesDialog;

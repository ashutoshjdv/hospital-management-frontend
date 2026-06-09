import React, { useEffect, useState } from 'react';
import type { AssignRolesDialogProp } from '../types/UserTypes';
import { assignRoles } from '../api/UserAPI';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/app/hooks/redux';

const AssignRolesDialog = ({ user, open, onOpenChange }: AssignRolesDialogProp) => {
  const roles = useAppSelector((state) => state.role.roles);

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
      await assignRoles(
        user.id,

        selectedRoles,
      );

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Roles</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="flex items-center gap-2">
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

            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssignRolesDialog;

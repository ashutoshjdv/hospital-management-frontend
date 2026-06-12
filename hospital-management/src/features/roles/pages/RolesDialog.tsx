import React, { useEffect, useState } from 'react';
// import type { AssignRolesDialogProp } from '../types/UserTypes';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
// import { useRoles } from '@/features/roles/hooks/useRoles';
// import { useAssignRoles } from '../hooks/useAssignRoles';
import { SelectSeparator } from '@/components/ui/select';
import type { RoleDialogProps } from '../types/RoleTypes';
// import { useAppSelector } from '@/app/hooks/redux';
// import { Permission } from '../types/RoleTypes';
import { usePermissions } from '../hooks/usePermission';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateRole, useUpdateRole } from '../hooks/useAddRole';

const RolesDialog = ({ role, open, onOpenChange, type }: RoleDialogProps) => {
  // const roles = useAppSelector((state) => state.role.roles);

  //   const { mutateAsync, isPending } = useAssignRoles();
  const createRoleMutation = useCreateRole();

  const updateRoleMutation = useUpdateRole();

  const { data: permissions = [] } = usePermissions();

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const isPending = createRoleMutation.isPending || updateRoleMutation.isPending;

  useEffect(() => {
    if (type === 'update' && role) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(role.name);

      setDescription(role.description);

      setSelectedPermissions(role.permissions.map((p) => p.id));
    }

    if (type === 'add') {
      setName('');

      setDescription('');

      setSelectedPermissions([]);
    }
  }, [role, type]);

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName('');

      setDescription('');

      setSelectedPermissions([]);
    }
  }, [open]);

  const toggleRole = (permissionId: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId],
    );
  };

  const handleSave = async () => {
    const payload = {
      name,

      description,

      permissionIds: selectedPermissions,
    };

    try {
      if (type === 'add') {
        await createRoleMutation.mutateAsync(payload);
      } else {
        await updateRoleMutation.mutateAsync({
          id: role!.id,

          body: payload,
        });
      }

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
            <DialogTitle className="md:px-3 md:pt-3 text-primary text-xl">
              {type === 'add' ? 'Add Role' : 'Edit Role'}
            </DialogTitle>
            <SelectSeparator />
          </DialogHeader>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Role Name" />

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Role Description"
          />
          <div className="max-md:space-y-4 space-x-2 grid grid-cols-2">
            {permissions.map((permission) => (
              <div key={permission.id} className="flex items-center gap-2 md:p-3">
                <Checkbox
                  checked={selectedPermissions.includes(permission.id)}
                  onCheckedChange={() => toggleRole(permission.id)}
                />

                <span>{permission.name.replaceAll('_', ' ')}</span>
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>

            <Button disabled={isPending} onClick={handleSave}>
              {isPending ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RolesDialog;

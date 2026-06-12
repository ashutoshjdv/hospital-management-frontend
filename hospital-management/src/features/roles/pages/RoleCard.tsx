import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Pencil, Trash } from 'lucide-react';
import React from 'react';
import type { Role } from '../types/RoleTypes';
import { useDeleteRole } from '../hooks/useDeleteRole';
import ConfirmDialog from '@/shared/components/alerts/DeleteDialog';

interface RoleCardProps {
  role: Role;
  onEdit: () => void;
}
const RoleCard = ({ role, onEdit }: RoleCardProps) => {
  const { mutateAsync: deleteRole, isPending } = useDeleteRole();

  const handleDeleteRole = async () => {
    try {
      await deleteRole({ id: role.id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card className="m-3 min-h-[450px] flex flex-col">
        <CardHeader>
          <CardTitle>{role.name.replaceAll('_', ' ')}</CardTitle>
          <CardDescription>{role.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {role.permissions.map((permission) => (
              <Badge variant={'default'} className="px-3 py-1">
                {permission.name.replaceAll('_', ' ')}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between">
          <Button variant={'secondary'} onClick={onEdit}>
            <Pencil /> Edit Role
          </Button>
          <ConfirmDialog
            title="Delete Role?"
            description={`Are you sure you want to delete "${role.name.replaceAll('_', ' ')}"? This action cannot be undone.`}
            confirmText={isPending ? 'Deleting...' : 'Delete'}
            onConfirm={handleDeleteRole}
          >
            <Button variant="destructive" disabled={isPending}>
              <Trash />
              Delete Role
            </Button>
          </ConfirmDialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default RoleCard;

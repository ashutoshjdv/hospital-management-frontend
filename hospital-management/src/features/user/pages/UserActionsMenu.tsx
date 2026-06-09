import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import type { UserActionsMenuProps } from '../types/UserTypes';
import AssignRolesDialog from './AssignRolesDialog';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserActionsMenu = ({ user }: UserActionsMenuProps) => {
  const [assignRolesOpen, setAssignRolesOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setAssignRolesOpen(true)}>Assign Roles</DropdownMenuItem>

          <DropdownMenuItem>View Details</DropdownMenuItem>

          <DropdownMenuItem>Activate</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AssignRolesDialog user={user} open={assignRolesOpen} onOpenChange={setAssignRolesOpen} />
    </>
  );
};

export default UserActionsMenu;

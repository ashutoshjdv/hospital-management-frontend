export interface UserRole {
  id: string;
  name: string;
}

export interface User {
  id: string;
  email: string | null;
  status: string | null;
  isEmailVerified: boolean | null;
  roles: UserRole[];
}

export interface Users {
  users: User[];
}

export interface UserActionsMenuProps {
  user: User;
}

export interface AssignRolesDialogProp {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

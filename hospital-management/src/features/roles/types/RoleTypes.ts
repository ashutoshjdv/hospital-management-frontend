export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Roles {
  roles: Role[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface RoleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'add' | 'update';
  role?: Role;
}

export interface RoleRequest {
  name: string;
  description: string;
  permissionIds: string[];
}

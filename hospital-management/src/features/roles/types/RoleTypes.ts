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

import api from '@/lib/api';
import type { Permission, Role, RoleRequest } from '../types/RoleTypes';

export async function fetchRoles(): Promise<Role[]> {
  const response = await api.get('/role');

  return response.data;
}

export async function fetchRoleById(id: string): Promise<Role> {
  const response = await api.get(`/role/${id}`);

  return response.data;
}

export async function postRole(body: RoleRequest): Promise<string> {
  const response = await api.post(`/role`, body);

  return response.data;
}

export async function updateRole(id: string, body: RoleRequest): Promise<string> {
  const response = await api.put(`/role/${id}`, body);

  return response.data;
}

export async function deleteRole(id: string): Promise<string> {
  const response = await api.delete(`/role/${id}`);

  return response.data;
}

export async function fetchPermissions(): Promise<Permission[]> {
  const response = await api.get(`/permission`);

  return response.data;
}

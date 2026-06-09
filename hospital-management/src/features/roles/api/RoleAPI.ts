import api from '@/lib/api';
import type { Role } from '../types/RoleTypes';

export async function fetchRoles(): Promise<Role[]> {
  const response = await api.get('/role');

  return response.data;
}

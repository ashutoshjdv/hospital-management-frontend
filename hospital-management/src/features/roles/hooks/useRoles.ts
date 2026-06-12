import { useQuery } from '@tanstack/react-query';
import { fetchRoles } from '../api/RoleAPI';

export const useRoles = () =>
  useQuery({
    queryKey: ['roles'],

    queryFn: fetchRoles,
  });

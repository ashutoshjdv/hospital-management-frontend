import { useQuery } from '@tanstack/react-query';
import { fetchPermissions } from '../api/RoleAPI';

export const usePermissions = () =>
  useQuery({
    queryKey: ['permission'],
    queryFn: fetchPermissions,
  });

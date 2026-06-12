import { useQuery } from '@tanstack/react-query';

import { fetchUserData } from '../api/UserAPI';

export const useUsers = () =>
  useQuery({
    queryKey: ['users'],

    queryFn: fetchUserData,
  });

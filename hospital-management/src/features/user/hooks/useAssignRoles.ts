import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { assignRoles } from '../api/UserAPI';

export const useAssignRoles = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,

      roleIds,
    }: {
      userId: string;

      roleIds: string[];
    }) => assignRoles(userId, roleIds),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });

      toast.success('Roles assigned successfully');
    },

    onError: (error) => {
      console.error(error);

      toast.error('Failed to assign roles');
    },
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRole } from '../api/RoleAPI';
import { toast } from 'sonner';

interface DeleteRoleMutation {
  id: string;
}

export const useDeleteRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: DeleteRoleMutation) => deleteRole(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['roles'],
      });

      toast.success('Role deleted successfully!');
    },

    onError: () => toast.error('Error in deleting the role'),
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postRole, updateRole } from '../api/RoleAPI';
import type { RoleRequest } from '../types/RoleTypes';
import { toast } from 'sonner';

interface UpdateRoleMutation {
  id: string;

  body: RoleRequest;
}

export const useCreateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRole,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['roles'],
      });

      toast.success('Role created successfully!');
    },

    onError: () => toast.error('Error in creating the role'),
  });
};

export const useUpdateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,

      body,
    }: UpdateRoleMutation) => updateRole(id, body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['roles'],
      });

      toast.success('Role updated successfully!');
    },

    onError: () => toast.error('Error in updating the role'),
  });
};

import axios from 'axios';
import api from '../../../lib/api';
import type { User } from '../types/UserTypes';

interface AxiosErrorResp {
  data?: { message?: string };
  statusText?: string;
}

export async function fetchUserData(): Promise<User[]> {
  try {
    const res = await api.get<User[]>('/users');
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const resp = err.response as AxiosErrorResp | undefined;
      const m = resp?.data?.message ?? resp?.statusText ?? err.message;
      const message = typeof m === 'string' ? m : JSON.stringify(m);
      throw new Error(message, { cause: err });
    }
    throw new Error('Fetch user failed', { cause: err });
  }
}

export async function assignRoles(
  userId: string,

  roleIds: string[],
): Promise<string> {
  const response = await api.put(
    `/users/${userId}/roles`,

    {
      roleIds,
    },
  );

  return response.data;
}

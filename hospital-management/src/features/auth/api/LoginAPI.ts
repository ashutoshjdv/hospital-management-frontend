import axios from 'axios';
import type { LoginRequest, LoginResponse } from '../types/LoginTypes';

interface AxiosErrorResp {
  data?: { message?: string };
  statusText?: string;
}

const API_BASE = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  try {
    const res = await api.post<LoginResponse>('/auth/login', payload);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const resp = err.response as AxiosErrorResp | undefined;
      const m = resp?.data?.message ?? resp?.statusText ?? err.message;
      const message = typeof m === 'string' ? m : JSON.stringify(m);
      throw new Error(message, { cause: err });
    }
    throw new Error('Login failed', { cause: err });
  }
}

export default login;

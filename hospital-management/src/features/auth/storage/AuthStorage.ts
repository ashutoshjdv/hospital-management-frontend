import type { AuthData } from '../types/LoginTypes';

export function saveToken(token: string): void {
  localStorage.setItem('authToken', token);
}

export function getToken(): string | null {
  return localStorage.getItem('authToken');
}

export function clearToken(): void {
  localStorage.removeItem('authToken');
}

export const saveAuth = (auth: AuthData) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};

export const getAuth = (): AuthData | null => {
  const authString = localStorage.getItem('auth');
  return authString ? JSON.parse(authString) : null;
};

export const clearAuth = () => {
  localStorage.removeItem('auth');
};

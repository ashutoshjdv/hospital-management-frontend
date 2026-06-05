export interface AuthState {
  token: string | null;
  email: string | null;
  authorities: string[] | null;
  isAuthenticated: boolean;
}

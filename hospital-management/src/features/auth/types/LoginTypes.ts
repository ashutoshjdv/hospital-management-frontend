export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  email: string;
  authorities: string[];
}

export interface AuthData {
  token: string;
  email: string;
  authorities: string[];
}

import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../types/AuthState';
import { getAuth } from '../storage/AuthStorage';

const storedAuth = getAuth();

const initialState: AuthState = {
  token: storedAuth?.token || null,
  email: storedAuth?.email || null,
  authorities: storedAuth?.authorities || [],
  isAuthenticated: !!storedAuth,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, email, authorities } = action.payload;
      state.token = token;
      state.email = email;
      state.authorities = authorities;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.email = null;
      state.authorities = [];
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

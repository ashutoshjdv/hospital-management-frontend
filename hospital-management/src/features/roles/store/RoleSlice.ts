import { createSlice } from '@reduxjs/toolkit';
import type { Roles } from '../types/RoleTypes';

const initialState: Roles = {
  roles: [],
};

const roleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRolesData: (state, action) => {
      state.roles = action.payload;
    },
    clearRolesData: (state) => {
      state.roles = [];
    },
  },
});

export const { setRolesData, clearRolesData } = roleSlice.actions;

export default roleSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { Users } from '../types/UserTypes';

const initialState: Users = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.users = action.payload;
    },
    clearUsersData: (state) => {
      state.users = [];
    },
  },
});

export const { setUsersData, clearUsersData } = userSlice.actions;

export default userSlice.reducer;

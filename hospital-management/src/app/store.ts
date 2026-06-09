import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/AuthSlice';
import userReducer from '../features/user/store/UserSlice';
import roleReducer from '../features/roles/store/RoleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    role: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

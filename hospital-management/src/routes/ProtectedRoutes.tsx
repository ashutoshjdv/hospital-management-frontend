import React from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '../app/hooks/redux';
// import { fetchRoles } from '@/features/roles/api/RoleAPI';

type ProtectedRoutesProps = {
  children: React.ReactNode;
};
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  //   const authToken = localStorage.getItem('authToken');

  const auth = useAppSelector((state) => state.auth);

  // const dispatch = useAppDispatch();

  // fetchRoles().then((roles) => dispatch(setRolesData(roles)));

  // dispatch(setRolesData(fetchRoles()));

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;

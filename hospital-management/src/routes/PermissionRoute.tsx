import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks/redux';

type PermissionRouteProps = {
  permission: string;

  children: React.ReactNode;
};
const PermissionRoute = ({ permission, children }: PermissionRouteProps) => {
  const permissions = useAppSelector((state) => state.auth.authorities);

  const isAuthorized = permissions?.includes(permission);

  if (!isAuthorized) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PermissionRoute;

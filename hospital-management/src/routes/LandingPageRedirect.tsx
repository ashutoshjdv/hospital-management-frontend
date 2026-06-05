import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks/redux';
import { sidebarItems } from '../app/config/SidebarItems';

const LandingPageRedirect = () => {
  const authorities = useAppSelector((state) => state.auth.authorities);

  const visibleItems = sidebarItems.filter((item) => authorities?.includes(item.permission));

  const firstRoute = visibleItems[0]?.path;

  if (!firstRoute) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Navigate to={firstRoute} replace />;
};

export default LandingPageRedirect;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../app/components/sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <h2>
        <Sidebar />
      </h2>
      <hr />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;

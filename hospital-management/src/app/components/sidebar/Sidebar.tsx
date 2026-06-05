import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { sidebarItems } from '../../config/SidebarItems';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const authorities = useAppSelector((state) => state.auth.authorities);

  const visibleItems = sidebarItems.filter(
    (item) => authorities?.includes(item.permission) ?? false,
  );

  return (
    <>
      <nav>
        {visibleItems.map((item) => (
          <div key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;

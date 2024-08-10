import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '@components/Topbar';


const Layout = () => {
  return (
    <>
      <div className='container-web'>
        <Topbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '@components/Topbar';


const Layout = ({ showTopbar  }) => {
  return (
    <>
      <div className='container-web'>
        {showTopbar  && <Topbar />}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

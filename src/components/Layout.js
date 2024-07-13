import React from 'react';
import { Outlet } from "react-router-dom"
import SidebarMenu from '@components/SidebarMenu';

const Layout = () => {
    return (
        <>
            <div className="container-app">
                <SidebarMenu />
                <main className="App">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout

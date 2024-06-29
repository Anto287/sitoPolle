import React from 'react';
import { Outlet } from "react-router-dom"
import SidebarMenu from '@components/SidebarMenu';

const Layout = () => {
    return (
        <>
            <div class="container-app">
                <SidebarMenu></SidebarMenu>
                <main className="App">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout

import React from 'react';
import {Outlet} from 'react-router-dom'
// import Main from './Main';


const Layout = () => {
    return (
        <div>
            <h1>Welcome to the CRUD......!!!!!</h1>
             {/* <Main/> */}
            <Outlet/>
        </div>
    );
}

export default Layout;

import React from 'react';
import {Outlet} from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
           <img src="https://assets.website-files.com/5ff66329429d880392f6cba2/61c323afb777801522775611_CRUD%20%20Preview.png" alt="" />
           <Outlet/>
        </div>
    );
}

export default MainPage;

import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                
                <Link className='navbar-brand' to={'/'}>HOME</Link>
                
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                       
                       <Link to={"Createuser" } class="nav-link">Create User</Link>
                        {/* <li class="nav-item">
                            <a class="nav-link active" aria-current="page" >Create User</a>
                        </li> */}
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

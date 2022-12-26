import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <div class="container-fluid">
                
                <Link className='navbar-brand' 
                to={'/'}><img className='crud' src="data:image/png;base64,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" alt="" />
                </Link>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav bg-danger">
                       
                       <Link to={"Create" } class="nav-link">CREATE</Link>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
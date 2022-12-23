import React from 'react';
import {Link} from 'react-router-dom'

const Nav4 = () => {
    return (
        <div className="contianer">
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        HEROES
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item bg-primary">
                                <Link to="/Home" className="nav-link">
                                    HOME
                                </Link>
                            </li>

                            <li class="nav-item bg-primary">
                                <Link to="/Ntr" className="nav-link">
                                    NTR
                                </Link>
                            </li>

                            <li class="nav-item bg-primary">
                                <Link to="/Pawan" className="nav-link">
                                    PAWAN-KALYAN
                                </Link>
                            </li>
                            <li class="nav-item bg-primary">
                                <Link to="/Ram" className="nav-link">
                                    RAM
                                </Link>
                            </li>
                            <li class="nav-item bg-primary">
                                <Link to="/Charan" className="nav-link">
                                    RAM CHARAN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav4;

import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
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
                            <li class="nav-item bg-warning">
                                <Link to="/Home" className="nav-link">
                                    HOME
                                </Link>
                            </li>

                            <li class="nav-item bg-warning">
                                <Link to="/Gal" className="nav-link">
                                    GAL-GADOT
                                </Link>
                            </li>

                            <li class="nav-item bg-warning">
                                <Link to="/Ryan" className="nav-link">
                                    RYAN-REYNOLDS
                                </Link>
                            </li>
                            <li class="nav-item bg-warning">
                                <Link to="/Allu" className="nav-link">
                                    AllU-ARJUN
                                </Link>
                            </li>
                            <li class="nav-item bg-warning">
                                <Link to="/Prabhas" className="nav-link">
                                    PRABHAS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

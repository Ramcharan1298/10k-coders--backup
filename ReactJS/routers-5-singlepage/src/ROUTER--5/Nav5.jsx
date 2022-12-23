import React from 'react';
import {Link} from 'react-router-dom'

const Nav5 = () => {
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
                        <li class="nav-item bg-secondary">
                            <Link to="/Home" className="nav-link">
                                HOME
                            </Link>
                        </li>

                        <li class="nav-item bg-secondary">
                            <Link to="/Nani" className="nav-link">
                                NANI
                            </Link>
                        </li>

                        <li class="nav-item bg-secondary">
                            <Link to="/Sesh" className="nav-link">
                                ADIVI-SESH
                            </Link>
                        </li>
                        <li class="nav-item bg-secondary">
                            <Link to="/Sharwa" className="nav-link">
                                SHARWANAND
                            </Link>
                        </li>
                        <li class="nav-item bg-secondary">
                            <Link to="/Ravi" className="nav-link">
                                RAVI TEJA
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    );
}

export default Nav5;

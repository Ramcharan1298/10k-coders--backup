import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="contianer">
            <nav class="navbar navbar-expand-lg  bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        HEROES
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/Home" class="nav-link">
                                    HOME
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Prabhas" class="nav-link">
                                    PRABHAS
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Chris" class="nav-link">
                                    CHRIS
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Stathum" class="nav-link">
                                    STATHUM
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Daniel" class="nav-link">
                                    DANIEL-CRAIG
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
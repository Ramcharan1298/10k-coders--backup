import React from "react"
import { Link } from "react-router-dom"

const Navbar2 =()=>{
    return(
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
                               <Link to="/" className="nav-link">
                                  HOME
                               </Link>
                            </li>
                            <li class="nav- bg-success">
                               <Link to="/Evans" className="nav-link">
                                  CHRIS-EVANS
                               </Link>
                            </li>
                            <li class="nav-item bg-warning">
                               <Link to="/Hugh" className="nav-link">
                                  HUGH-JACKMAN
                               </Link>
                            </li>
                            <li class="nav-item bg-success">
                               <Link to="/Henry" className="nav-link">
                                  HENRY-CAVILL
                               </Link>
                            </li>
                            <li class="nav-item bg-warning">
                               <Link to="/Nicolas" className="nav-link">
                                  NICOLAS-CAGE
                               </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar2
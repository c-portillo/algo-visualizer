import React from "react";
import AlgoSelect from "../algo-select/algo-select.component";

import './navbar.styles.scss'

const NavBar = ({ currentPage }) => {
    
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> Home </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                 <AlgoSelect currentPage={currentPage}/>
            </div>
        </nav>
    )
}

export default NavBar;
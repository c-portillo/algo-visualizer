import React from "react";

import './navbar.styles.scss'


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> Home </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
import React from "react";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {

    const headerFont = { 
        fontSize: "1.25rem",
        color: "black",
        textDecoration: "none",
    };

    const sideFont = {
        color: "black",
        textDecoration: "none",
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link style={headerFont} to={'/'}>
                        Home
                    </Link>
                    <div className="" id="">
                        <div className="navbar-nav flex flex-row py-2">
                            <Link style={sideFont} className="px-3" to={'/api'}>
                                API
                            </Link>
                            <Link style={sideFont} className="px-3" to={'/api/product'}>
                                Create
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container my-3">
                <Outlet />
            </div>
        </React.Fragment>
    );
}

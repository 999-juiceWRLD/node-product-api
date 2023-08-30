import React from "react";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="text-decoration-none" to={'/home'}>
                        <a className="navbar-brand">Home</a>
                    </Link>
                    <div className="" id="">
                        <div className="navbar-nav flex flex-row">
                            <Link className="text-decoration-none" to={'/api'}>
                                <a className="nav-link active px-3">API</a>
                            </Link>
                            <Link className="text-decoration-none" to={'/about'}>
                                <a className="nav-link active px-3">About</a>
                            </Link>
                            <Link className="text-decoration-none" to={'/feature'}>
                                <a className="nav-link active px-3" href="#">Features</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </React.Fragment>
    );
}

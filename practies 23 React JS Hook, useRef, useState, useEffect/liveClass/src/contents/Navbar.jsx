import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container shadow-lg">
            <div className="row">
                <div className="col-4">
                    <div>
                    <img className="logo-img"
                         src="data:image/png;base64,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"
                         alt="SZR logo"/>

                    <span>SZR Enterprise</span>
                    </div>

                </div>
                <div className="col-8">
                    <div className="navbar-nav">
                        <ul className="nav">
                            <li className="active nav-item d-flex">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
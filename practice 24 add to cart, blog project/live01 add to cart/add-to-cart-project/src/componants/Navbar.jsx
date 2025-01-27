import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Userlogin from "./userlogin.jsx";

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem("token"));

    const handleLogout = () => {
        sessionStorage.removeItem("token"); // Remove token from sessionStorage
        setToken(null); // Update the token state
        navigate("/"); // Redirect to home or login page
    };

    // Monitor sessionStorage for token changes
    useEffect(() => {
        const handleStorageChange = () => {
            setToken(sessionStorage.getItem("token"));
        };

        // Listen for storage changes (if another tab modifies sessionStorage)
        window.addEventListener("storage", handleStorageChange);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Brand Name */}
                    <NavLink className="navbar-brand" to="/">SZR Enterprise</NavLink>

                    {/* Toggler for mobile view */}
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

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/*<NavLink className="nav-link" to="/productpage">Products</NavLink>*/}
                            </li>
                            {/* Conditionally render "My Cart" if token exists */}
                            {token && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cartpage">My Cart</NavLink>
                                </li>
                            )}
                        </ul>

                        {/* Conditional rendering for Login/Logout */}
                        {token ? (
                            <button
                                onClick={handleLogout}
                                className="btn btn-danger"
                                type="button"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Userlogin onLogin={() => setToken(sessionStorage.getItem("token"))} />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

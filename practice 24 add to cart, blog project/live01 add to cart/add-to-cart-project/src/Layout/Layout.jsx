import React from 'react';
import Navbar from "../componants/Navbar.jsx"; // Fixed typo in "components"

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div>
                {props.children}
            </div>
        </>
    );
};

export default Layout;

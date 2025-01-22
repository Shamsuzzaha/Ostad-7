import React from 'react';
import Navbar from "../contents/Navbar.jsx";
import Todo from "../contents/Todo.jsx";

const Services = () => {
    return (
        <>
            <Navbar/>
            <div>
                <h1>Our Online service is undergoing, you can visit our physical shop and buy with 10% Discount</h1>
            </div>
            <div>
                <Todo/>
            </div>
        </>
    );
};

export default Services;
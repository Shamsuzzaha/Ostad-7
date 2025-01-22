import React from 'react';
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";


const App = () => {
    return (

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
    );
};

export default App;
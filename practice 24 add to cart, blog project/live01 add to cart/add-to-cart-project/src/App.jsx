import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Productpage from "./pages/Productpage.jsx";
import Cartpage from "./pages/Cartpage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/productpage" element={<Productpage />} />
                <Route path="/cartpage" element={<Cartpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming you have an App component in your project
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Get the root element from your HTML file
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

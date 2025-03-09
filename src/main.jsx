import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter 
            basename="/My-Portfolio" 
            future={{ v7_relativeSplatPath: true, v7_startTransition: true }} // 👈 Add this
        >
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

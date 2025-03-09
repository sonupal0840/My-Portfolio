import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter 
        // basename="/My-Portfolio"
        // future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        > 
            <App />
        </HashRouter>
    </React.StrictMode>
);

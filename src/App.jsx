import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Studies from "./Pages/Studies";
import Portfolio from "./Pages/Protfolio";
import Certificates from "./Pages/Certificates";
import Tools from "./Pages/Tools";
import TechnicalSkill from "./Pages/TechnicalSkill";
// import Navbar from "./Components/Navbar"; // Ensure Navbar exists

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.replace("/", ""); // Remove "/"
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
};

const App = () => {
    return (
        <>
            <ScrollToSection />
            <Portfolio/> {/* Navbar always visible */}

            {/* Full-page sections */}
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="studies"><Studies /></div>
            <div id="skill"><TechnicalSkill /></div>
            <div id="certificate"><Certificates /></div>
            <div id="tools"><Tools /></div>
        </>
    );
};

export default App;

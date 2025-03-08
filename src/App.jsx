import React, { useEffect } from "react";
import { BrowserRouter,  useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Studies from "./Pages/Studies";
import Portfolio from "./Pages/Protfolio";
import Certificates from "./Pages/Certificates";
import Tools from "./Pages/Tools";
import TechnicalSkill from "./Pages/TechnicalSkill";

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
        <BrowserRouter>
            <ScrollToSection />
            <div id=""><Portfolio/></div>  {/* Navbar is always visible */}
            <div id="/"><Home /></div>
            <div id="about"><About /></div>
            <div id="studies"><Studies /></div>
            <div id="skill"><TechnicalSkill /></div>
            <div id="certificate"><Certificates /></div>
            <div id="tools"><Tools /></div>
        </BrowserRouter>
    );
};

export default App;

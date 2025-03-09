// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom"; // ❌ HashRouter hata diya!

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Studies from "./Pages/Studies";
// import Portfolio from "./Pages/Protfolio";
// import Certificates from "./Pages/Certificates";
// import Tools from "./Pages/Tools";
// import TechnicalSkill from "./Pages/TechnicalSkill";
// import Footer from "./Pages/Footer";

// const ScrollToSection = () => {
//     const location = useLocation();

//     useEffect(() => {
//         const sectionId = location.pathname.replace("/", "");
//         if (sectionId) {
//             const section = document.getElementById(sectionId);
//             if (section) {
//                 section.scrollIntoView({ behavior: "smooth" });
//             }
//         }
//     }, [location]);

//     return null;
// };

// const App = () => {
//     return (
//         <>
//             <ScrollToSection />
//             <Portfolio /> 
//             <div id="home"><Home /></div>
//             <div id="about"><About /></div>
//             <div id="studies"><Studies /></div>
//             <div id="skill"><TechnicalSkill /></div>
//             <div id="certificate"><Certificates /></div>
//             <div id="tools"><Tools /></div>
//             <Footer/>
//         </>
//     );
// };

// export default App;
// _____________________________________________________________________________________________

import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";  // ✅ Layout को Import किया

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />} />  {/* ✅ Layout.jsx को include किया */}
        </Routes>
    );
};

export default App;

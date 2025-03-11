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

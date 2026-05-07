import { useState } from "react";
import TechStack from "./section/TechStack.jsx";
import CardProyek from "./components/CardProyek.jsx";
import Proyek from "./section/Proyek.jsx";
import Tentang from "./section/Tentang.jsx";
import Sosmed from "./components/Sosmed.jsx";
import Hero from "./section/Hero.jsx";
import Navbar from "./section/Navbar.jsx";
import Kontak from "./section/Kontak.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailProjek from "./components/DetailProjek"; // Halaman detail proyek
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Hero />
                            <Tentang />
                            <TechStack />
                            <Proyek />
                            <Kontak />
                        </div>
                    }
                />
                <Route path="/:id" element={<DetailProjek />} />
            </Routes>
        </Router>
    );
}

export default App;

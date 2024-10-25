import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Project from "./components/pages/Project.js";
import Contact from "./components/pages/Contact.js";
import About from "./components/pages/About.js";

function App() {
    useEffect(() => {
        document.body.style.fontFamily = "Happy Monkey";
    });
    return (
        <BrowserRouter>
            <main className="mx-auto max-w-7xl">
                <Header />
                <Routes>
                    <Route path="/" element={<Project />} />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                </Routes>
                <Footer />
            </main>
        </BrowserRouter>
    );
}

export default App;

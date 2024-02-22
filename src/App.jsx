import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsappBtn from "./components/common/WhatsappBtn/WhatsappBtn";
import Navbar from "./components/layout/Navbar/Navbar";
import NavbarMobile from "./components/layout/NavbarResponsive/NavbarMobile";
import Home from "./components/pages/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import TyC from "./components/pages/Legal/TyC";
import PyP from "./components/pages/Legal/PyP";

function App() {
  return (
    <Router>
      <header className="header-container">
        <nav className="navbar-desktop">
          <Navbar />
        </nav>
        <nav className="navbar-mobile">
          <NavbarMobile />
        </nav>
      </header>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tyc" element={<TyC />} />
          <Route path="/pyp" element={<PyP />} />
        </Routes>
        <div className="Wsp-btn">
          <WhatsappBtn />
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

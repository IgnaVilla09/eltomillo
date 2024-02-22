import React, { useState } from "react";
import "./NavbarMobile.css";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="navbarMobile-container">
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/tomillologo.png"
          alt="LogoMobile"
          className="LogoMobile"
        />
        <div className="navbar-container_separador"></div>
        <button className="btn-menu" onClick={toggleMenu}>
          <MenuIcon fontSize="string" />
        </button>
      </div>
      <div className={`menu-items ${showMenu ? "show" : ""}`}>
        <button onClick={toggleMenu}>
          <CancelIcon fontSize="string" className="CancelIcon" />
        </button>
        <ul className="container-items">
          <li className="menu-li">
            <a href="#cardLaura">Soy Laura</a>
          </li>
          <li className="menu-li">
            <a href="#carouselCards">Mis productos</a>
          </li>
          <li className="menu-li">
            <a href="#service">Mis servicios</a>
          </li>
          <li className="menu-li">
            <a href="#instagramFeed">Proyectos realizados</a>
          </li>
          <li className="menu-li">
            <a href="#sliderLogos">Alianzas Activas</a>
          </li>
          <li className="menu-li">
            <a href="#talleres">Experiencias y talleres</a>
          </li>
        </ul>
        <div className="btn-contact">
          <a
            href="https://api.whatsapp.com/send?phone=5492615970583&text=%C2%A1Hola,%20Laura!%20Vi%20tu%20p%C3%A1gina%20y%20quiero%20hacerte%20unas%20consultas…"
            target="_blank"
            className="btn-contact_click"
          >
            Escríbeme
          </a>
        </div>
        <div className="vector-menu">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
            alt=""
            className="vector-plantaMenu"
          />
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;

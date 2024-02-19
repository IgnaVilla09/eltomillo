import React, { useState } from "react";
import "./NavbarMobile.css";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

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
            <a href="">Soy Laura</a>
          </li>
          <li className="menu-li">
            <a href="">Mis productos</a>
          </li>
          <li className="menu-li">
            <a href="#">Mis servicios</a>
          </li>
          <li className="menu-li">
            <a href="">Proyectos realizados</a>
          </li>
          <li className="menu-li">
            <a href="">Alianzas Activas</a>
          </li>
          <li className="menu-li">
            <a href="">Experiencias y talleres</a>
          </li>
        </ul>
        <div className="btn-contact">
          <button className="btn-contact_click">Escríbeme</button>
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

import React, { useState } from "react";
import "./NavbarMobile.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CancelIcon from "@mui/icons-material/Cancel";

const NavbarMobile = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

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
          <CancelIcon />
        </button>
        <ul className="container-items">
          <li className="menu-li">
            <a href="">Soy Laura</a>
          </li>
          <li className="menu-li">
            <a href="">Mis productos</a>
          </li>
          <li className="menu-li" onClick={toggleSubmenu}>
            <a href="#">
              Mis servicios{" "}
              <ArrowDropDownIcon
                fontSize="string"
                sx={{ padding: "5px 0 0 0", fontSize: "25px" }}
              />
            </a>
            <ul className="container-items_submenu">
              <li className={`submenu-li ${showSubmenu ? "show" : ""}`}>
                <a href="#">La huerta</a>
              </li>
              <li className={`submenu-li ${showSubmenu ? "show" : ""}`}>
                <a href="#">Vivero circular</a>
              </li>
              <li className={`submenu-li ${showSubmenu ? "show" : ""}`}>
                <a href="#">Diseño y paisajismo</a>
              </li>
            </ul>
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
      </div>
    </>
  );
};

export default NavbarMobile;

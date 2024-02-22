import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/">
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/tomillologo.png"
          alt="El tomillo Espacio Agrourbano"
          className="logo-img"
        />
      </a>
      <div className="navbar-container-items">
        <ul className="navbar-container-items_menu">
          <li className="items_menu">
            <a href="#cardLaura">
              Soy <span>Laura</span>
            </a>
          </li>

          <li className="items_menu">
            <a href="#carouselCards">
              Mis <span>productos</span>
            </a>
          </li>
          <li className="items_menu">
            <a href="#service">
              Mis <span>servicios</span>
            </a>
          </li>

          <li className="items_menu">
            <a href="#instagramFeed">
              <span>Proyectos</span> realizados
            </a>
          </li>
          <li className="items_menu">
            <a href="#sliderLogos">
              <span>Alianzas</span> activas
            </a>
          </li>

          <li className="items_menu">
            <a href="#talleres">
              Experiencias y <span>talleres</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-container_separador"></div>
    </div>
  );
};

export default Navbar;

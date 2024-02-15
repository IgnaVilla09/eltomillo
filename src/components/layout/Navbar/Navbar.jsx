import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/">
        <img
          src="../../../../src/assets/img/tomillologo.png"
          alt=""
          className="logo-img"
        />
      </a>
      <div className="navbar-container-items">
        <ul className="navbar-container-items_menu">
          <li className="items_menu">
            <a href="">
              Soy <span>Laura</span>
            </a>
          </li>

          <li className="items_menu">
            <a href="">
              Mis <span>productos</span>
            </a>
          </li>
          <li className="items_menu">
            <a href="">
              Mis <span>servicios</span>
            </a>
          </li>

          <li className="items_menu">
            <a href="">
              <span>Proyectos</span> realizados
            </a>
          </li>
          <li className="items_menu">
            <a href="">
              <span>Alianzas</span> activas
            </a>
          </li>

          <li className="items_menu">
            <a href="">
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

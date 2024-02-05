import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/">
        <img src={import.meta.env.VITE_IMAGE_1} alt="" className="logo-img" />
      </a>
      <div className="navbar-container-items">
        <ul>
          <li>
            <a href="">
              Soy <span>Laura</span>
            </a>
          </li>
          <li>
            <a href="">
              Mis <span>productos</span>
            </a>
          </li>
          <li>
            <a href="">
              Mis <span>servicios</span>
            </a>
          </li>

          <li>
            <a href="">
              <span>Proyectos</span> realizados
            </a>
          </li>
          <li>
            <a href="">
              <span>Alianzas</span> activas
            </a>
          </li>

          <li>
            <a href="">
              {" "}
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

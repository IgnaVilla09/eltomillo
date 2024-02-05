import "./NavbarMobile.css";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarMobile = () => {
  return (
    <div className="navbarMobile-container">
      <img
        src={import.meta.env.VITE_IMAGE_1}
        alt="LogoMobile"
        className="LogoMobile"
      />
      <div className="navbar-container_separador"></div>
      <button className="btn-menu">
        <MenuIcon fontSize="string" />
      </button>
    </div>
  );
};

export default NavbarMobile;

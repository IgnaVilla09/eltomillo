import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container-footer_categorias">
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/tomillologo.png"
          alt=""
          className="logo-footer"
        />
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/escribime.png"
          alt=""
          className="subtitle-footer"
        />
        <div className="container-social-media">
          <a href="">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Instagram.png"
              alt=""
              className="socialmedia"
            />
          </a>
          <a href="">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Spotify.png"
              alt=""
              className="socialmedia"
            />
          </a>
          <a href="">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Whatsapp.png"
              alt=""
              className="socialmedia"
            />
          </a>
          <a href="">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Linkedin.png"
              alt=""
              className="socialmedia"
            />
          </a>
        </div>
        <p className="copyright">@2024eltomillo</p>
        <div className="text-legal">
          <a href="">Políticas de privacidad </a>
          <div className="footer-separator"></div>
          <a href="">Términos y condiciones </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "./Footer.css";
import { Link } from "react-router-dom";

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
          <a href="https://www.instagram.com/eltomillomza/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Instagram.png"
              alt=""
              className="socialmedia"
            />
          </a>
          <a
            href="https://open.spotify.com/playlist/20CtmSniWjKPcLYZfePwsd?si=qvKu27YBSKG3FPwGvTIOLA&pi=u-bQLEHSz-QzWT "
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Spotify.png"
              alt=""
              className="socialmedia"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5492615970583&text=%C2%A1Hola,%20Laura!%20Vi%20tu%20p%C3%A1gina%20y%20quiero%20hacerte%20unas%20consultas…"
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Whatsapp.png"
              alt=""
              className="socialmedia"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/maria-laura-crayon-54402021/?originalSubdomain=ar"
            target="_blank"
          >
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/svg/Linkedin.png"
              alt=""
              className="socialmedia"
            />
          </a>
        </div>
        <p className="copyright">@2024eltomillo</p>
        <div className="text-legal">
          <Link to="/pyp">Políticas de privacidad</Link>
          <div className="footer-separator"></div>
          <Link to="/TyC">Términos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

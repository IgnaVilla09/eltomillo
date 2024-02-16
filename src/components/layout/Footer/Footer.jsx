import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container-footer_categorias">
        <img
          src="./src/assets/img/tomillologo.png"
          alt=""
          className="logo-footer"
        />
        <img
          src="./src/assets/img/escribime.png"
          alt=""
          className="subtitle-footer"
        />
        <div className="container-social-media">
          <a href="">
            <InstagramIcon fontSize="string" className="socialmedia" />
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70px"
              height="70px"
              viewBox="0 0 24 24"
              className="socialmedia"
            >
              <path
                fill="currentColor"
                d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
          <a href="">
            <WhatsAppIcon fontSize="string" className="socialmedia" />
          </a>
          <a href="">
            <LinkedInIcon fontSize="string" className="socialmedia" />
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

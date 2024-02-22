import "./styles.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
const PyP = () => {
  return (
    <div className="container-legal">
      <Link to="/">
        <HomeIcon />
        Ir a inicio
      </Link>
      <h1>Políticas de privacidad</h1>
      <h2>Última actualización: 22/02/2024</h2>
      <ol>
        <li>
          <h3>Aceptación de los Términos</h3>
          <p>
            El Tomillo se compromete a proteger su privacidad. Esta Política de
            Privacidad describe cómo El Tomillo recopila, utiliza y protege la
            información que usted proporciona a través de nuestro sitio web
            (https://eltomillo.vercel.app) y cualquier otro servicio en línea
            que ofrezcamos (en conjunto, "Servicios"). Al acceder o utilizar
            nuestros Servicios, usted acepta las prácticas descritas en esta
            Política de Privacidad.
          </p>
        </li>
        <li>
          <h3>Cookies y Tecnologías Similares</h3>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar la
            funcionalidad de nuestros Servicios y para analizar cómo los
            usuarios interactúan con ellos. Puede configurar su navegador para
            que rechace todas las cookies o para que le avise cuando se envíe
            una cookie. Sin embargo, si bloquea las cookies, es posible que
            algunas partes de nuestros Servicios no funcionen correctamente.
          </p>
        </li>
        <li>
          <h3>Modificaciones de la Política de privacidad</h3>
          <p>
            Nos reservamos el derecho de modificar estas Políticas de privacidad
            en cualquier momento. Las modificaciones entrarán en vigencia
            inmediatamente después de su publicación en nuestro sitio web. Se
            recomienda revisar periódicamente esta página para estar al tanto de
            cualquier cambio.
          </p>
        </li>
      </ol>

      <p>
        Si tiene alguna pregunta o inquietud sobre esta Política de privacidad,
        no dude en ponerse en contacto con nosotros.
      </p>
    </div>
  );
};

export default PyP;

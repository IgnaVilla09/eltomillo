import "./styles.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
const TyC = () => {
  return (
    <div className="container-legal">
      <Link to="/">
        <HomeIcon />
        Ir a inicio
      </Link>
      <h1>Términos y Condiciones</h1>
      <h3>Fecha de última actualización: 22/02/2024</h3>
      <ol>
        <li>
          <h3>Aceptación de los Términos</h3>
          <p>
            Al acceder y utilizar nuestro sitio web y servicios, usted acepta
            estar legalmente vinculado por los siguientes términos y
            condiciones. Si no está de acuerdo con alguno de estos términos, por
            favor, absténgase de utilizar nuestros servicios.
          </p>
        </li>
        <li>
          <h3>Uso de la Información</h3>
          <p>
            Nuestro sitio web y servicios están destinados únicamente para fines
            informativos y educativos. No nos hacemos responsables de cualquier
            mal uso de la información proporcionada.
          </p>
        </li>
        <li>
          <h3>Propiedad Intelectual</h3>
          <p>
            Todo el contenido, incluidos textos, imágenes, gráficos y logotipos,
            son propiedad exclusiva de El Tomillo Espacio Agrourbano. Queda
            estrictamente prohibida la reproducción, distribución o modificación
            de dicho contenido sin nuestro consentimiento expreso por escrito.
          </p>
        </li>
        <li>
          <h3>Limitación de Responsabilidad</h3>
          <p>
            En la medida máxima permitida por la ley, no seremos responsables
            por ningún daño directo, indirecto, incidental, especial o
            consecuente que surja del uso de nuestros servicios, incluidos,
            entre otros, la pérdida de beneficios, datos o tiempo de actividad
            del sitio.
          </p>
        </li>
        <li>
          <h3>Modificaciones de los Términos</h3>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones
            en cualquier momento. Las modificaciones entrarán en vigencia
            inmediatamente después de su publicación en nuestro sitio web. Se
            recomienda revisar periódicamente esta página para estar al tanto de
            cualquier cambio.
          </p>
        </li>
        <li>
          <h3>Ley Aplicable</h3>
          <p>
            Estos términos y condiciones se regirán e interpretarán de acuerdo
            con las leyes del lugar de residencia del emprendimiento de vivero y
            agroespacio. Cualquier disputa que surja en relación con estos
            términos estará sujeta a la jurisdicción exclusiva de los tribunales
            de dicha jurisdicción.
          </p>
        </li>
      </ol>

      <p>
        Si tiene alguna pregunta o inquietud sobre estos términos y condiciones,
        no dude en ponerse en contacto con nosotros.
      </p>
    </div>
  );
};

export default TyC;

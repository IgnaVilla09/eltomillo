import "./CardLaura.css";

const CardLaura = () => {
  function toggleExpand() {
    var textarea = document.querySelector(
      ".card-container_presentation--textarea"
    );
    textarea.classList.toggle("expanded");
  }

  return (
    <div className="card-container">
      <p>
        Huertas sostenibles, paisajismo inspirador y experiencias ecológicas que
        logran <span>fusionar</span> la modernidad de la ciudad con la vitalidad
        de la <span>naturaleza</span>
      </p>
      <div className="card-container_presentation">
        <img
          src={import.meta.env.VITE_IMAGE_2}
          alt="flower"
          className="card-container_presentation--flower"
        />
        <div className="card-container_presentation--textarea">
          <div className="contenido">
            <p>MENÚ - Soy Laura Fotografía de perfil</p>

            <p>
              ¡Hola! Mi nombre es Laura, soy la creadora de El Tomillo. Tengo
              experiencia en el diseño de espacios verdes con impronta ambiental
              y huertas urbanas. Mi sueño es llenar ciudades enteras con
              jardines comestibles, combinando mi pasión por el paisajismo con
              mis habilidades para la agricultura sostenible.
            </p>
            <p>
              Esta aventura comenzó con el deseo de cambiar mis hábitos para
              tener una vida más sustentable. Estudié una Técnica Universitaria
              en Gestión de Empresas e hice varios estudios en diseño,
              arquitectura del paisaje, agroecología, agricultura sostenible y
              gestión contra el cambio climático... ¡Y ahora puedo compartir mi
              experiencia con personas y empresas que tengan el mismo interés!
            </p>
            <p>
              Trabajo con un enfoque agro urbano que se refleja en cada uno de
              mis proyectos, desde el vivero, talleres o encuentros hasta el
              diseño jardines corporativos. Así sembré El Tomillo, para que sea
              la raíz de una visión: un espacio en el que la naturaleza y la
              ciudad coexisten, creando armonía entre belleza y funcionalidad.
            </p>
            <p>
              Porque para mí, cada planta tiene una historia que va más allá de
              la estética y cada espacio urbano debe ser producto del diseño
              ecológico y la planeación sostenible.
            </p>
            <p>
              Gracias por tu interés, ¡espero podamos trabajar juntos cultivando
              plantas y cosechando experiencias!
            </p>
          </div>
          <button id="toggleBtn" onClick={toggleExpand}>
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLaura;

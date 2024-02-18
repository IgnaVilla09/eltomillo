import "./Presentation.css";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <img
        src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/micompromiso.png"
        alt="Mi compromiso"
        className="subtitle-img"
      />
      <div className="presentation-container_grid">
        <div className="presentation-container_grid--section">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/personavector.png"
            alt=""
          />
          <p>
            Creemos en la capacidad de la tierra para{" "}
            <span className="span-presentation">unir</span> a las personas,
            inspirar conversaciones y fortalecer vínculos.
          </p>
        </div>
        <div className="presentation-container_grid--section">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/plantavectorblanco.png"
            alt=""
          />
          <p>
            Cultivamos plantas, generamos experiencias y tejemos vínculos de
            trabajo, <span className="span-presentation">sembrando</span> la
            promesa de un futuro más sostenible.
          </p>
        </div>
        <div className="presentation-container_grid--section">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/florvector.png"
            alt=""
          />
          <p>
            Nuestra misión es convertir cada rincón de la ciudad en una fuente
            de conexión con la{" "}
            <span className="span-presentation">naturaleza</span>, respetando el
            proceso natural del crecimiento verde entre el cemento.
          </p>
        </div>
        <div className="presentation-container_grid--section">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/conexionvector.png"
            alt=""
          />
          <p>
            Si buscas una mayor{" "}
            <span className="span-presentation">conexión</span> con la
            naturaleza, estamos aquí para ayudarte.
          </p>
        </div>
        <div className="presentation-container_grid--section">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/equilibrio.png"
            alt=""
          />
          <p>
            Buscamos el <span className="span-presentation">equilibrio</span>{" "}
            como guía hacia un futuro donde la vida florezca en todas las
            direcciones. .
          </p>
        </div>
        <div className="presentation-container_grid--section">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/compartirvector.png"
            alt=""
          />
          <p>
            Apostamos por el aprendizaje y{" "}
            <span className="span-presentation">compartimos</span>{" "}
            conocimientos, siempre abiertos a aventuras agroecológicas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

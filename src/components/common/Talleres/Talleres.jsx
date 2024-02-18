import "./Talleres.css";

const Talleres = () => {
  return (
    <div className="container-talleres">
      <div className="container-talleres_box">
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/talleres.png"
          alt=""
          className="subtitle-talleres"
        />
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/margarita.png"
          alt=""
          className="margarita"
        />
        <p className="text-talleres">
          Consultá la grilla de talleres que tenemos disponibles este mes.
          Desarrollamos talleres para adultos y niños, en pintura, creación,
          diseño, jardinería, cuentos y naturaleza y kokedamas, entre otros. 
        </p>
        <a href="" className="btn-talleres">
          Consulta por los talleres activos
        </a>
      </div>
      <div className="container-talleres_alojamiento">
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/alojate.png"
          alt=""
          className="subtitle-alojamiento"
        />
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/casaplanta.png"
          alt=""
          className="casa"
        />
        <p className="text-alojamiento">
          ¡Vení a hospedarte con nosotros! Tenemos un espacio en el que tendrás
          acceso a la huerta aromática, podrás compostar tus desechos orgánicos,
          separar residuos y aprender sobre hábitos urbanos sostenibles. 
        </p>
        <a href="" className="btn-talleres">
          Reserva a través de Airbnb
        </a>
      </div>
    </div>
  );
};

export default Talleres;

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
        <a
          href="https://api.whatsapp.com/send?phone=5492615970583&text=%C2%A1Hola,%20Laura!%20Vi%20tu%20p%C3%A1gina%20y%20quiero%20hacerte%20unas%20consultas…"
          target="_blank"
          className="btn-talleres"
        >
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
        <a
          href="https://www.airbnb.com.ar/rooms/860859899356271936?guests=1&adults=1&viralityEntryPoint=1&s=76&_set_bev_on_new_domain=1708618190_NmNhZmFmYWU1NWVk&source_impression_id=p3_1708618190_pCHNDUzzt2e8AN7Q"
          target="_blank"
          className="btn-talleres"
        >
          Reserva a través de Airbnb
        </a>
      </div>
    </div>
  );
};

export default Talleres;

import "./Service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-container_title">
        <img
          src="./src/assets/img/misservicios.png"
          alt=""
          className="servicios-title"
        />
        <img src="./src/assets/img/limones.png" alt="" className="limones" />
      </div>

      <div className="service-container_card--left">
        <div className="service-container_card--left--img">
          <img src="./src/assets/img/planta1.jpg" alt="" className="img-card" />
        </div>

        <img
          src="./src/assets/img/huertasorganicas.png"
          alt=""
          className="img-subtitle"
        />
        <p className="text-service">
          Gestión proyectos de agricultura urbana en el ámbito público y
          privado. Gestionamos un proyecto integral que abarca el diseño y la
          instalación de huertas orgánicas. Incluimos los insumos necesarios
          para llevar adelante un espacio con cultivos urbanos. Te acompañamos
          en el proceso inicial para garantizar que disfrutes de tu propia
          huerta de manera fácil y exitosa. ¿Qué incluye? Armado, instalación de
          la huerta. ¿Cuánto tiempo toma? Dependiendo del tamaño del proyecto. 
          ¿En dónde? Ciudad de Mendoza y alrededores.
        </p>
        <a href="" className="btn-service">
          Pedinos un presupuesto
        </a>
      </div>
      <div className="service-container_card--right">
        <div className="service-container_card--right--img">
          <img src="./src/assets/img/kodamas.jpg" alt="" className="img-card" />
        </div>

        <img
          src="./src/assets/img/viverocircular.png"
          alt=""
          className="img-subtitle"
        />
        <p className="text-service">
          Un espacio ecológico para la creación de proyectos circulares. En
          nuestro local, convergen la eficiencia de la economía circular y la
          vitalidad de un vivero no convencional. El Vivero es un espacio
          colectivo en dónde podés comprar local y de forma sustentable,
          conociendo sobre economía circular y redes de emprendimiento.  ¿En
          dónde estamos? Dorrego 1496, Guaymallén, Mendoza – Argentina. ¿Cómo
          llegar? Ir a Google Maps. ¿En qué horarios? Estamos de Lunes a
          Viernes. Por la mañana con cita previa y por las tardes de
          16:30-20:30. Los días sábados de 09:30-13:30.
        </p>
        <a href="" className="btn-service">
          Agenda tu visita
        </a>
      </div>
      <div className="service-container_card--left">
        <div className="service-container_card--left--img">
          <img src="./src/assets/img/planta3.jpg" alt="" className="img-card" />
        </div>

        <img
          src="./src/assets/img/paisajismo.png"
          alt=""
          className="img-subtitle"
        />
        <p className="text-service">
          Diseño de jardines residenciales y otros espacios verdes. Diseñamos
          jardines residenciales con una impronta ecológica de acuerdo a tu
          espacio y necesidades. Priorizamos el cuidado del ambiente en cada
          diseño y te asesoramos en la selección de plantas, macetas y otras
          decoraciones; buscando la mejor distribución de especies para que las
          plantas permanezcan sanas y vibrantes de manera orgánica.  ¿Qué
          incluye? Gestión del diseño y la ejecución. ¿Cuánto tiempo toma?
          Dependiendo del tamaño del proyecto. ¿En dónde? Ciudad de Mendoza y
          alrededores.
        </p>
        <a href="" className="btn-service">
          Pedinos un presupuesto
        </a>
      </div>
    </div>
  );
};

export default Service;

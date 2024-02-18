import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Carousel.css";

const CarouselCards = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-container-subtitle">
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/misproductos.png"
          alt=""
          className="subtitle-products"
        />
        <div className="direction-btns">
          <button className="btn-direction">
            <ArrowCircleLeftIcon fontSize="string" />
          </button>
          <button className="btn-direction">
            <ArrowCircleRightIcon fontSize="string" />
          </button>
        </div>
        <div className="carousel-cards">
          <div className="carousel-cards-items">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/catalogoconsciente.jpg"
              className="backgroundCard"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vector.png"
              alt=""
              className="vector-green"
            />
            <div className="description-card">
              <h4>Catalogos Conscientes</h4>
              <img
                src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
                alt=""
              />
            </div>
          </div>
          <div className="carousel-cards-items">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/macetas.jpg"
              alt=""
              className="backgroundCard"
            />
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vector.png"
              alt=""
              className="vector-green"
            />
            <div className="description-card">
              <h4>Macetas</h4>
              <img
                src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
                alt=""
              />
            </div>
          </div>
          <div className="carousel-cards-items">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/plantasexteriores.jpg"
              alt=""
              className="backgroundCard"
            />
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vector.png"
              alt=""
              className="vector-green"
            />
            <div className="description-card">
              <h4>Plantas de exterior</h4>
              <img
                src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
                alt=""
              />
            </div>
          </div>
          <div className="carousel-cards-items">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/kokedamas.jpg"
              alt=""
              className="backgroundCard"
            />
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vector.png"
              alt=""
              className="vector-green"
            />
            <div className="description-card">
              <h4>Plantas de interior y kokedamas</h4>
              <img
                src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
                alt=""
              />
            </div>
          </div>
          <div className="carousel-cards-items">
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/insumoshuerta.jpg"
              alt=""
              className="backgroundCard"
            />
            <img
              src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vector.png"
              alt=""
              className="vector-green"
            />
            <div className="description-card">
              <h4>Insumos de huerta</h4>
              <img
                src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;

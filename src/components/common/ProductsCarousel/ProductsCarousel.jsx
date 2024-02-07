import "./ProductsCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 864, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="productsHome-container">
      <h2>Mis productos</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["mobile"]}
        swipeable={true}
        draggable={true}
      >
        <a href="">
          <div className="productsHome-container--carousel">
            <img
              src={import.meta.env.VITE_IMAGE_5}
              alt=""
              className="img-vector"
            />
            <div className="productsHome-container--carousel--title">
              <h4 className="title-card">Catálogos conscientes</h4>
              <img
                src={import.meta.env.VITE_IMAGE_6}
                alt=""
                className="planta-vector"
              />
            </div>
          </div>
        </a>
        <a href="">
          <div className="productsHome-container--carousel">
            <img
              src={import.meta.env.VITE_IMAGE_5}
              alt=""
              className="img-vector"
            />
          </div>
        </a>
        <a href="">
          <div className="productsHome-container--carousel">
            <img
              src={import.meta.env.VITE_IMAGE_5}
              alt=""
              className="img-vector"
            />
          </div>
        </a>
        <a href="">
          <div className="productsHome-container--carousel">
            <img
              src={import.meta.env.VITE_IMAGE_5}
              alt=""
              className="img-vector"
            />
          </div>
        </a>
        <a href="">
          <div className="productsHome-container--carousel">
            <img
              src={import.meta.env.VITE_IMAGE_5}
              alt=""
              className="img-vector"
            />
          </div>
        </a>
        <a href="">
          <div className="productsHome-container--carousel">
            <img
              src={import.meta.env.VITE_IMAGE_5}
              alt=""
              className="img-vector"
            />
          </div>
        </a>
      </Carousel>
      ;
    </div>
  );
};

export default ProductsCarousel;

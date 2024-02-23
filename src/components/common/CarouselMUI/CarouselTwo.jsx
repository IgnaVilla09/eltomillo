import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Items";
import Slider from "./Slider.json";
import "./Carousel.css";

function Example() {
  return (
    <>
      <div className="carousel-container">
        <div className="container-subtitle">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/misproductos.png"
            alt=""
            className="subtitle-products"
          />
        </div>
        <Carousel
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            style: {
              backgroundColor: "#73a62a",
            },
          }}
          swipe={true}
          sx={{
            width: "650px",
            height: "800px",
            gridColumn: "2/3",
            borderRadius: "100px",
          }}
        >
          {Slider.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Example;

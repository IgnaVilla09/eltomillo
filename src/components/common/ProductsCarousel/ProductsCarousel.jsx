import "./ProductsCarousel.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";

const ProductsCarousel = () => {
  useEffect(() => {
    const btnRight = document.getElementById("btnRight");
    const btnLeft = document.getElementById("btnLeft");
    const productList = document.getElementById("productList");

    btnRight.addEventListener("click", function () {
      productList.classList.remove("move-left");
      productList.classList.add("move-right");
    });

    btnLeft.addEventListener("click", function () {
      productList.classList.remove("move-right");
      productList.classList.add("move-left");
    });
  }, []);
  return (
    <div className="productsHome-container">
      <h2>Mis productos</h2>
      <div className="productsHome-container_list" id="productList">
        <button className="btn-right" id="btnRight">
          <ArrowCircleLeftIcon fontSize="string" />
        </button>
        <img src={import.meta.env.VITE_IMAGE_3} alt="" />
        <img src={import.meta.env.VITE_IMAGE_4} alt="" />
        <img src={import.meta.env.VITE_IMAGE_3} alt="" />
        <img src={import.meta.env.VITE_IMAGE_4} alt="" />
        <img src={import.meta.env.VITE_IMAGE_3} alt="" />
        <img src={import.meta.env.VITE_IMAGE_4} alt="" />
        <button className="btn-left" id="btnLeft">
          <ArrowCircleRightIcon fontSize="string" />
        </button>
      </div>
    </div>
  );
};

export default ProductsCarousel;

import AccordionUsage from "../../common/Accordion/Accordion";
import CardLaura from "../../common/CardLaura/CardLaura";
import ProductsCarousel from "../../common/ProductsCarousel/ProductsCarousel";

import "./Home.css";

const Home = () => {
  return (
    <>
      <CardLaura />
      <ProductsCarousel />
      <AccordionUsage />
    </>
  );
};

export default Home;

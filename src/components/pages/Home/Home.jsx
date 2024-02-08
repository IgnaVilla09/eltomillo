import AccordionUsage from "../../common/Accordion/Accordion";
import CardLaura from "../../common/CardLaura/CardLaura";
import InstagramFeed from "../../common/InstagramFeed/InstagramFeed";
import ProductsCarousel from "../../common/ProductsCarousel/ProductsCarousel";

import "./Home.css";

const Home = () => {
  return (
    <>
      <CardLaura />
      <ProductsCarousel />
      <AccordionUsage />
      <InstagramFeed />
    </>
  );
};

export default Home;

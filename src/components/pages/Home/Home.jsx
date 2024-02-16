import CardLaura from "../../common/CardLaura/CardLaura";
import CarouselCards from "../../common/Carousel/Carousel";
import InstagramFeed from "../../common/InstagramFeed/InstagramFeed";
import Presentation from "../../common/Presentation/Presentation";
import Service from "../../common/Service/Service";
import SliderLogos from "../../common/SliderLogos/SliderLogos";
import Talleres from "../../common/Talleres/Talleres";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <CardLaura />
      <Presentation />
      <CarouselCards />
      <Service />
      <InstagramFeed />
      <SliderLogos />
      <Talleres />
    </>
  );
};

export default Home;

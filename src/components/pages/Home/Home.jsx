import CardLaura from "../../common/CardLaura/CardLaura";
import Example from "../../common/CarouselMUI/CarouselTwo";
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
      <div id="cardLaura">
        <CardLaura />
      </div>
      <div id="presentation">
        <Presentation />
      </div>
      <div id="carouselCards">
        <Example />
        {/* <CarouselCards /> */}
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="instagramFeed">
        <InstagramFeed />
      </div>
      <div id="sliderLogos">
        <SliderLogos />
      </div>
      <div id="talleres">
        <Talleres />
      </div>
    </>
  );
};

export default Home;

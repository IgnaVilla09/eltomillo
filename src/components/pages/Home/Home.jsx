import AccordionUsage from "../../common/Accordion/Accordion";
import CardLaura from "../../common/CardLaura/CardLaura";
import InstagramFeed from "../../common/InstagramFeed/InstagramFeed";
import Presentation from "../../common/Presentation/Presentation";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <CardLaura />
      <Presentation />
      {/* <AccordionUsage />
      <InstagramFeed /> */}
    </>
  );
};

export default Home;

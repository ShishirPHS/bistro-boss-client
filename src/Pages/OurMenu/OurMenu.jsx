import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../../components/Home/PopularMenu/PopularMenu";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={bgImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-28">
        <PopularMenu></PopularMenu>
      </div>
      <Cover
        img={bgImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-28">
        <PopularMenu></PopularMenu>
      </div>
      <Cover
        img={bgImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-28">
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default OurMenu;

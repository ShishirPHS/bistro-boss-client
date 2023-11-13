import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg"; 

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
    </div>
  );
};

export default OurMenu;

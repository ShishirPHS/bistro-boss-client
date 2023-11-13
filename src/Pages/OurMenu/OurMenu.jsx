import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg";
import dessertsImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/Home/SectionTitle/SectionTitle";
import MenuCategory from "../../components/Menu/MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={bgImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-32 mb-12">
        <SectionTitle
          subHeader={"Don't miss"}
          header={"TODAY'S OFFER"}
        ></SectionTitle>
      </div>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts */}
      <MenuCategory
        items={desserts}
        img={dessertsImg}
        title={"DESSERTS"}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
      {/* salad */}
      <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
      {/* soup */}
      <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
    </div>
  );
};

export default OurMenu;

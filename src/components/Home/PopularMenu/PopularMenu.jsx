import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="container mx-auto">
      <div className="mb-12">
        <SectionTitle
          subHeader={"Popular Items"}
          header={"From Our Menu"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-20">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

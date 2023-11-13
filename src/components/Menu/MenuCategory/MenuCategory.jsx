import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && (
        <div className="mb-28">
          <Cover
            img={img}
            heading={title}
            subHeading={"Would you like to try a dish?"}
          ></Cover>
        </div>
      )}
      <div className="container mx-auto grid grid-cols-2 gap-4 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  img: PropTypes.string,
  title: PropTypes.string,
};

export default MenuCategory;

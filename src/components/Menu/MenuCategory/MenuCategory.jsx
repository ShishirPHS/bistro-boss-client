import { Link } from "react-router-dom";
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
      <div className="mb-20">
        <div className="container mx-auto grid grid-cols-2 gap-4">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-6 text-black border-black">
              Order Now
            </button>
          </Link>
        </div>
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

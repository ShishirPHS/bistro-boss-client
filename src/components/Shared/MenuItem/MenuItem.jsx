import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex items-start">
      <div className="grid grid-cols-10">
        <div className="w-[118px] h-[104px] col-span-2">
          <img
            style={{ borderRadius: "0px 200px 200px 200px" }}
            className="w-full h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="col-span-8 ml-8">
          <h3 className="font-Cinzel text-xl text-[#151515] uppercase">
            {name} ---------------
          </h3>
          <p className="font-Inter text-[#737373]">{recipe}</p>
        </div>
      </div>
      <div className="ml-[3px]">
        <p className="text-xl text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;

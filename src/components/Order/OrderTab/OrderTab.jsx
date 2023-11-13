import FoodCard from "../../Shared/FoodCard/FoodCard";
import PropTypes from "prop-types";

const OrderTab = ({ items }) => {
  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;

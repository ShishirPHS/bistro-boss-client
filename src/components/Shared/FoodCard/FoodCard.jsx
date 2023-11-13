import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 m-5 px-5 py-1 text-white bg-black">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;

import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/Home/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <SectionTitle
        subHeader={"What's New?"}
        header={"add an item"}
      ></SectionTitle>
      <div className="mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] p-12">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444] mb-2">
                Recipe Name*
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-5">
            {/* category */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444] mb-2">
                  Category*
                </span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                defaultValue="default"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444] mb-2">
                  Price*
                </span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444] mb-2">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("recipeDetails", { required: true })}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="mb-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs bg-transparent focus:outline-none"
            />
          </div>
          <button className="btn btn-ghost bg-gradient-to-r from-[#835D23] to-[#B58130] px-7 py-4 text-white">
            Add Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;

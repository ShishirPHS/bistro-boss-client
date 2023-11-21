import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData(); 
  const { name, category, recipe, price, _id } = item;

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success pop-up
        // reset();
        Swal.fire({
          text: `${data.name} updated to the menu.`,
          icon: "success",
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <h2 className="text-center text-5xl uppercase">Update Item</h2>
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
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
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
              {...register("recipe", { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="mb-6">
            <input
              {...register("image", { required: true })}
              type="file"
              // defaultValue={image}
              className="file-input w-full max-w-xs bg-transparent focus:outline-none"
            />
          </div>
          <button className="btn btn-ghost bg-gradient-to-r from-[#835D23] to-[#B58130] px-7 py-4 text-white">
            Update an Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;

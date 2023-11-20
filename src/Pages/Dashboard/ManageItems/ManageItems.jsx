import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/Home/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div>
      <div className="mt-5 mb-16">
        <SectionTitle
          subHeader={"Hurry Up!"}
          header={"Manage All Items"}
        ></SectionTitle>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={`Image of ${item.name}`} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-lg bg-[#D1A054] hover:bg-[#f4b049]">
                      <FaEdit className="text-white text-2xl"></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button className="btn bg-[#B91C1C] hover:bg-[#f82929] btn-lg">
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

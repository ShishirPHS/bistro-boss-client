import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire({
              text: "Log Out Successful",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="font-Cinzel normal-case text-xl">
          <p className="text-[32px] font-black">BISTRO BOSS</p>
          <p className="text-[24px] font-bold tracking-[9px]">Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

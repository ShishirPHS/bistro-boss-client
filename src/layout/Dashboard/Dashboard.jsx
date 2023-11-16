import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { TbAdjustmentsStar } from "react-icons/tb";
import { RiFileList3Fill } from "react-icons/ri";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex container mx-auto">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu space-y-2">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <GiWallet></GiWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <TbAdjustmentsStar></TbAdjustmentsStar>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <RiFileList3Fill></RiFileList3Fill>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

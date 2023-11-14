import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;

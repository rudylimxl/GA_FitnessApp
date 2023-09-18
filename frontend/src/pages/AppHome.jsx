import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";

const AppHome = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppHome;

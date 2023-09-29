import Homepage from "../components/homepage/Homepage";
import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";

const AppHome = () => {
  return (
    <div className="appContainer">
      <Navbar loggedIn={true} />
      <Homepage></Homepage>
    </div>
  );
};

export default AppHome;

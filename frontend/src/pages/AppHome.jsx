import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";

const AppHome = () => {
  return (
    <div>
      <Navbar loggedIn={true} />
      <Outlet />
      <img
        width="100%"
        src="https://storage.googleapis.com/bkr-fitapp/1strongerbg"
      ></img>
    </div>
  );
};

export default AppHome;

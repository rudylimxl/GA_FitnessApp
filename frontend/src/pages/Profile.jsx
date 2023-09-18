import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Profile;

import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";
import Profile from "../components/Profile";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Outlet />
    </div>
  );
};

export default ProfilePage;

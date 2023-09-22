import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";
import Profile from "../components/edit-profile/Profile";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div style={{ border: "1px solid grey" }}></div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;

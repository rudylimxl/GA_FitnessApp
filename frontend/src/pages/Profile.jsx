import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileInfo />
      <Outlet />
    </div>
  );
};

export default Profile;

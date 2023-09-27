import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";
import Profile from "../components/edit-profile/Profile";
import ProfileTabs from "../components/edit-profile/ProfileTabs";

const ProfilePage = () => {
  const userDetailId = sessionStorage.getItem("userdetail");

  //TODO: get user type and store in a variable, pass as props to ProfileTabs

  return (
    <div>
      <Navbar />
      <Profile userId={userDetailId} userType="main" />
      <div style={{ border: "1px solid grey", marginBottom: "20px" }}></div>
      <ProfileTabs usertype={"main"} />
      <Outlet />
    </div>
  );
};

export default ProfilePage;

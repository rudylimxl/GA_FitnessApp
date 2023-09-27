import Navbar from "../components/test/Navbar";
import { Outlet, useParams } from "react-router-dom";
import Profile from "../components/edit-profile/Profile";
import ProfileTabs from "../components/edit-profile/ProfileTabs";

const UserProfilePage = () => {
  const { id } = useParams();

  //TODO: get user type and store in a variable, pass as props to ProfileTabs and to Profile

  return (
    <div>
      <Navbar />
      <Profile userId={id} />
      <div style={{ border: "1px solid grey", marginBottom: "20px" }}></div>
      <ProfileTabs usertype={"trainer"} />
      <Outlet />
    </div>
  );
};

export default UserProfilePage;

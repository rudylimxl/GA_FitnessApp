import Navbar from "../components/test/Navbar";
import { Outlet, useParams } from "react-router-dom";
import Profile from "../components/edit-profile/Profile";
import ProfileTabs from "../components/edit-profile/ProfileTabs";
import { useState, useEffect } from "react";
import axios from "axios";

const UserProfilePage = () => {
  const [info, setInfo] = useState({ _id: "" });

  const { id } = useParams();

  useEffect(() => {
    //Gets profile info from database
    const getInfo = async () => {
      const res = await axios.get(
        `https://strongerfitnessapp.onrender.com/users/${id}`
      );
      setInfo(res.data);
    };

    getInfo();
  }, []);

  return (
    <div>
      <Navbar loggedIn={true} />
      <Profile info={info} profile="others" />
      <div style={{ border: "1px solid grey", marginBottom: "20px" }}></div>
      <ProfileTabs userId={id} userType={info.userType} />
      <Outlet />
    </div>
  );
};

export default UserProfilePage;

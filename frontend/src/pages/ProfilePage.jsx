import Navbar from "../components/test/Navbar";
import { Outlet } from "react-router-dom";
import Profile from "../components/edit-profile/Profile";
import ProfileTabs from "../components/edit-profile/ProfileTabs";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [info, setInfo] = useState({ _id: "" });

  const userDetailId = sessionStorage.getItem("userdetail");

  useEffect(() => {
    //Gets profile info from database
    const getInfo = async () => {
      const res = await axios.get(
        `http://localhost:8000/users/${userDetailId}`
      );
      setInfo(res.data);
    };

    getInfo();
  }, []);

  return (
    <div>
      <Navbar loggedIn={true} />
      <Profile info={info} profile="main" />
      <div style={{ border: "1px solid grey", marginBottom: "20px" }}></div>
      <ProfileTabs userId={info._id} userType={info.userType} />
      <Outlet />
    </div>
  );
};

export default ProfilePage;

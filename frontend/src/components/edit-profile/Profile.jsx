import Avatar from "@mui/material/Avatar";
import styles from "./Profile.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import EditProfile from "./EditProfile";
import ProfileInfo from "./ProfileInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import PostVideo from "./PostVideo";

const Profile = () => {
  const [info, setInfo] = useState(null);
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
  }, [info]);

  if (info === null) {
    return (
      <Box sx={{ display: "flex", margin: "50px auto", width: "10%" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div className={styles.grid}>
        <Avatar
          alt="Profile picture"
          src={info.avatarUrl}
          sx={{ width: 100, height: 100, marginTop: "20px" }}
        />
        <div className={styles.profileInfo}>
          <ProfileInfo info={info} />
        </div>
        <div className={styles.buttonGrp}>
          <EditProfile />
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            sx={{ width: "150px" }}
          >
            Log workout
          </Button>
          <PostVideo />
        </div>
      </div>
    );
  }
};

export default Profile;

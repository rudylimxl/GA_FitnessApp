import Avatar from "@mui/material/Avatar";
import styles from "./Profile.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProfileInfo from "./ProfileInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileBtnGroup from "./ProfileBtnGroup";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, purple } from "@mui/material/colors";

const Profile = ({ userId, userType }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    //Gets profile info from database
    const getInfo = async () => {
      const res = await axios.get(`http://localhost:8000/users/${userId}`);
      setInfo(res.data);
    };

    getInfo();
  }, [info]);

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: purple,
    },
  });

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
          {userType === "main" ? (
            <ProfileBtnGroup />
          ) : userType === "user" ? (
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary">
                User
              </Button>
            </ThemeProvider>
          ) : (
            <Button variant="contained" color="secondary">
              Trainer
            </Button>
          )}
        </div>
      </div>
    );
  }
};

export default Profile;

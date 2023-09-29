/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import styles from "./Profile.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProfileInfo from "./ProfileInfo";
import ProfileBtnGroup from "./ProfileBtnGroup";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, purple } from "@mui/material/colors";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = ({ info, profile }) => {
  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: purple,
    },
  });

  //Get the trainerId from the url parameter
  const trainerParams = useParams();

  //Get the userId of the client
  const userId = sessionStorage.getItem("userdetail");
  const userType = sessionStorage.getItem("usertype");

  const handleFollowTrainer = async () => {
    try {
      await axios.put(
        `https://strongerfitnessapp.onrender.com/users/trainer/${trainerParams.id}`,
        {
          params: {
            userId: userId,
          },
        }
      );

      alert("You are now following this trainer");
    } catch (error) {
      alert(error);
    }
  };

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
          {profile === "main" ? (
            <ProfileBtnGroup />
          ) : info.userType === "user" ? (
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary">
                User
              </Button>
            </ThemeProvider>
          ) : (
            <>
              <Button variant="contained" color="secondary">
                Trainer
              </Button>
              {userType === "user" && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={handleFollowTrainer}
                >
                  Follow Trainer
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
};

export default Profile;

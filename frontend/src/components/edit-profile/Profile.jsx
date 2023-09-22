import Avatar from "@mui/material/Avatar";
import styles from "./Profile.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditProfile from "./EditProfile";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div className={styles.grid}>
      <Avatar
        alt="Profile picture"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100, marginTop: "20px" }}
      />
      <div className={styles.profileInfo}>
        <ProfileInfo />
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
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          sx={{ width: "150px" }}
        >
          Post video
        </Button>
      </div>
    </div>
  );
};

export default Profile;

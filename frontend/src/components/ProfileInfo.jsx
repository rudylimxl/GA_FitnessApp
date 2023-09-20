import Avatar from "@mui/material/Avatar";
import styles from "./ProfileInfo.module.css";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";

const ProfileInfo = () => {
  return (
    <div className={styles.grid}>
      <Avatar
        alt="Profile picture"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100, marginTop: "20px" }}
      />
      <div className={styles.profileInfo}>
        <h3 style={{ marginTop: 0 }}>Username</h3>
        <p>Name</p>
        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </em>
        </p>
        <table>
          <tr>
            <th>Videos posted</th>
            <th>Workouts</th>
          </tr>
          <tr>
            <td>50</td>
            <td>50</td>
          </tr>
        </table>
      </div>
      <div className={styles.buttonGrp}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AccountCircleIcon />}
          sx={{ width: "150px" }}
        >
          Edit Profile
        </Button>
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

export default ProfileInfo;

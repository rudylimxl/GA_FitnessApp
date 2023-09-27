import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditProfile from "./EditProfile";
import PostVideo from "./PostVideo";

const ProfileBtnGroup = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileBtnGroup;

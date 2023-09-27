import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ProfileTabs = ({ usertype }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="stats">
        <Button variant="contained">Stats</Button>
      </Link>
      <Link to="videos">
        <Button variant="contained">Videos</Button>
      </Link>
      <Link to="workouts">
        <Button variant="contained">Workouts</Button>
      </Link>
      {usertype === "trainer" ? (
        <Link to="clients">
          <Button variant="contained">Clients</Button>
        </Link>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default ProfileTabs;

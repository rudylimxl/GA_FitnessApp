import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Comments = () => {
  return (
    <>
      <h2 style={{ textAlign: "left", marginLeft: "30px" }}>Comments</h2>
      <List
        sx={{ width: "80%", bgcolor: "background.paper", margin: "0 auto" }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <span>username123</span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontStyle="italic"
                >
                  {" — 19 Sep 2023"}
                </Typography>
              </>
            }
            secondary="Insert comment here"
          />
        </ListItem>
        <Divider
          component="li"
          sx={{ borderBottomWidth: 2, backgroundColor: "black" }}
        />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <span>username123</span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontStyle="italic"
                >
                  {" — 19 Sep 2023"}
                </Typography>
              </>
            }
            secondary="Insert comment here"
          />
        </ListItem>
        <Divider
          component="li"
          sx={{ borderBottomWidth: 2, backgroundColor: "black" }}
        />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <span>username123</span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontStyle="italic"
                >
                  {" — 19 Sep 2023"}
                </Typography>
              </>
            }
            secondary="Insert comment here"
          />
        </ListItem>
      </List>
    </>
  );
};

export default Comments;

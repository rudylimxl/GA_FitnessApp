import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
const Comments = ({ postId }) => {
  const [allComments, setAllComments] = useState(null);

  useEffect(() => {
    //get all comments for the specific post from database
    const getAllComments = async () => {
      const res = await axios.get(
        `http://localhost:8000/posts/${postId}/comments`
      );
      setAllComments(res.data);
    };

    getAllComments();
  }, [allComments]);

  return (
    <>
      <h2 style={{ textAlign: "left", marginLeft: "30px" }}>Comments</h2>
      <List
        sx={{ width: "80%", bgcolor: "background.paper", margin: "0 auto" }}
      >
        {allComments === null ? (
          <Box sx={{ display: "flex", margin: "50px auto", width: "10%" }}>
            <CircularProgress />
          </Box>
        ) : (
          allComments.map((comment) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={comment.user.name}
                      src={comment.user.avatarUrl}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <span>{comment.user.username}</span>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                          fontStyle="italic"
                        >
                          {` —  ${comment.date}`}
                        </Typography>
                      </>
                    }
                    secondary={comment.comment}
                  />
                  <img src={comment.url} height="150px"></img>
                </ListItem>
                <Divider
                  component="li"
                  sx={{ borderBottomWidth: 2, backgroundColor: "black" }}
                />
              </>
            );
          })
        )}
      </List>
    </>
  );
};

export default Comments;

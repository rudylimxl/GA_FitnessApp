import { useParams } from "react-router-dom";
import Navbar from "./test/Navbar";
import useSearch from "../hooks/useSearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import PostTags from "./post-details/PostTags";
import PostDescription from "./post-details/PostDescription";
import Badge from "@mui/material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import Link from "@mui/material/Link";
// import { useState } from "react";

const SearchResult = () => {
  // const [isData, setIsData] = useState({ users: false, posts: false });
  const inputParams = useParams();

  //get searched information for users and posts from database
  let response = useSearch(inputParams.input);

  return (
    <>
      <Navbar loggedIn={true} />
      <h1>Search results</h1>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        {response &&
          (response.users.length > 0 ? (
            <>
              <span>Users</span>
              <Badge badgeContent={response.users.length} color="primary">
                <PeopleIcon color="action" />
              </Badge>
              {response.users.map((user) => (
                <>
                  <Link overlay href={`/user/${user._id}`}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={user.username} src={user.avatarUrl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <>
                            <span>{user.username}</span>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                              fontStyle="italic"
                            >
                              {` —  ${user.userType}`}
                            </Typography>
                          </>
                        }
                        secondary={user.name}
                      />
                    </ListItem>
                  </Link>
                  <Divider
                    component="li"
                    sx={{ borderBottomWidth: 2, backgroundColor: "black" }}
                  />
                </>
              ))}
            </>
          ) : (
            <h3>No users found</h3>
          ))}
      </List>

      {response &&
        (response.posts.length > 0 ? (
          <>
            <span>Videos</span>
            <Badge badgeContent={response.posts.length} color="primary">
              <DynamicFeedIcon color="action" />
            </Badge>

            {response.posts.map((post) => (
              <Paper
                key={post._id}
                elevation={6}
                variant="outlined"
                sx={{
                  padding: "20px",
                  display: "flex",
                  gap: "20px",
                  margin: "10px 50px",
                }}
              >
                <CardMedia
                  sx={{ width: "300px", height: "250px" }}
                  component={
                    post.contentType.includes("image") ? "img" : "video"
                  }
                  image={post.url}
                  controls
                />
                <div>
                  <Link
                    overlay
                    href={`/post/${post._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3 style={{ textAlign: "left", textDecoration: "none" }}>
                      {post.title}
                    </h3>
                  </Link>
                  <PostTags tags={post.tags} />
                  <PostDescription desc={post.description} />
                  <div style={{ display: "flex" }}>
                    <Avatar
                      alt={post.user.username}
                      src={post.user.avatarUrl}
                    />
                    <div>
                      <span>{post.user.username} | &nbsp;</span>
                      <span>Posted on: {post.date}</span>
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </>
        ) : (
          <h3>No posts found</h3>
        ))}
    </>
  );
};

export default SearchResult;

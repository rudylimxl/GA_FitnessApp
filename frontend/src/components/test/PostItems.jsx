import Link from "@mui/material/Link";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PostItems = (props) => {
  if (props.posts === "") {
    return <div>loading posts...</div>;
  } else {
    return props.posts.toReversed().map((e, index) => {
      return (
        <>
          <Link key={index} href={`/post/${e._id}`} underline="none">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component={e.contentType.includes("image") ? "img" : "video"}
                image={e.url}
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </>
      );
    });
  }
};

export default PostItems;

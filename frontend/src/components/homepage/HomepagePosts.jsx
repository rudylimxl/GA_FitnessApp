import axios from "axios";
import { useEffect, useState } from "react";
import PostItems from "../test/PostItems";
import { Typography } from "@mui/material";

const HomepagePosts = (props) => {
  return (
    <div>
      <Typography variant="h5">What Our Best Trainers are Posting</Typography>
      <br></br>
      <div className="posts-container">
        <PostItems loading={props.loading} posts={props.posts}></PostItems>
      </div>
    </div>
  );
};

export default HomepagePosts;

import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";
import Comments from "../components/post-details/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Post = () => {
  const [postDetails, setPostDetails] = useState(null);

  //get id of current post from url
  const postIdParams = useParams();

  useEffect(() => {
    //get the post details from database
    const getPostDetails = async () => {
      const res = await axios.get(
        `http://localhost:8000/posts/${postIdParams.id}`
      );
      setPostDetails(res.data);
    };

    getPostDetails();
  }, []);

  return (
    <>
      <Navbar />
      {postDetails === null ? (
        <Box sx={{ display: "flex", margin: "50px auto", width: "10%" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.layout}>
          <video
            src={postDetails.url}
            width="80%"
            height="80%"
            controls
          ></video>
          <div>
            <PostDetails postDetails={postDetails} />
          </div>
          <div className={styles.comments}>
            <Comments postId={postIdParams.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Post;

import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";
import Comments from "../components/post-details/Comments";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import FileRobot from "../components/test/Filerobot";
import { useScreenshot } from "use-react-screenshot";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Post = () => {
  const [editedImage, setEditedImage] = useState("");
  const [success, setSuccess] = useState(false);
  const [post, setPost] = useState();
  const [loaded, setLoaded] = useState(false);

  //get id of current post from url
  const postIdParams = useParams();

  //get post data
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `http://localhost:8000/posts/${postIdParams.id}`
      );
      setPost(res.data);
      setLoaded(true);
      console.log(res.data);
    };

    getPost();
  }, []);

  //screenshot
  const videoPlayerRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });
  const getImage = () => takeScreenshot(videoPlayerRef.current);
  //

  let renderMedia = "";
  if (loaded && post.contentType.includes("image")) {
    renderMedia = (
      <div>
        <img src={post.url}></img>
        <FileRobot
          url={post.url}
          type="image"
          buttonText="Edit Image"
          setEditedImage={setEditedImage}
        />
      </div>
    );
  } else if (loaded) {
    renderMedia = (
      <div className={styles.media}>
        <video
          ref={videoPlayerRef}
          src={post.url}
          crossOrigin="anonymous"
          width="90%"
          height="90%"
          controls
        ></video>
        <FileRobot
          screenshot={getImage}
          url={image}
          buttonText="Take Screenshot"
          type="video"
          setEditedImage={setEditedImage}
        />
      </div>
    );
  }

  if (post === null) {
    return (
      <Box sx={{ display: "flex", margin: "50px auto", width: "10%" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className={styles.layout}>
          {renderMedia}
          <div>
            {loaded && (
              <PostDetails
                alert={setSuccess}
                data={post}
                editedImage={editedImage}
              />
            )}
          </div>

          {/* alert on comment upload */}
          <div className={styles.successAlert}>
            <Collapse in={success}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setSuccess(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Comment succesfully created!
              </Alert>
            </Collapse>
          </div>

          <div className={styles.comments}>
            <Comments postId={postIdParams.id} />
          </div>
        </div>
      </>
    );
  }
};
export default Post;

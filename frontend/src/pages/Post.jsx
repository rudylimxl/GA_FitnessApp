import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";
import Comments from "../components/post-details/Comments";
import { useLocation, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import FileRobot from "../components/test/Filerobot";
import { useScreenshot } from "use-react-screenshot";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Post = () => {
  const { state } = useLocation();
  const [editedImage, setEditedImage] = useState("");
  const [success, setSuccess] = useState(false);

  //get id of current post from url
  const postIdParams = useParams();

  //screenshot
  const videoPlayerRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });
  const getImage = () => takeScreenshot(videoPlayerRef.current);
  //

  let renderMedia = "";
  if (state.contentType.includes("image")) {
    renderMedia = (
      <div>
        <img src={state.url}></img>
        <FileRobot
          url={state.url}
          type="image"
          buttonText="Edit Image"
          setEditedImage={setEditedImage}
        />
      </div>
    );
  } else {
    renderMedia = (
      <div className={styles.media}>
        <video
          ref={videoPlayerRef}
          src={state.url}
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

  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        {renderMedia}
        <div>
          <PostDetails
            alert={setSuccess}
            data={state}
            editedImage={editedImage}
          />
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
};

export default Post;

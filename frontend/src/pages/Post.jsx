import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";
import Comments from "../components/post-details/Comments";
import { useLocation, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import FileRobot from "../components/test/Filerobot";
import { useScreenshot } from "use-react-screenshot";

const Post = () => {
  const { state } = useLocation();
  const [editedImage, setEditedImage] = useState("");
  
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
          <PostDetails data={state} editedImage={editedImage} />
        </div>
        <div className={styles.comments}>
          <Comments postId={postIdParams.id}/>
        </div>
      </div>
    </>
  );
};

export default Post;

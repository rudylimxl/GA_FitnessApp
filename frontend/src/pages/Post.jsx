import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";
import Comments from "../components/post-details/Comments";

const Post = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          width="80%"
          height="80%"
          controls
        ></video>
        <div>
          <PostDetails />
        </div>
        <div className={styles.comments}>
          <Comments />
        </div>
      </div>
    </>
  );
};

export default Post;

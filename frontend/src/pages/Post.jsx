import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";

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
        <PostDetails />
        <div className={styles.comments}>
          <h1>Comments</h1>
        </div>
      </div>
    </>
  );
};

export default Post;

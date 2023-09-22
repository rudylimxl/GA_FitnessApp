import { Link } from "react-router-dom";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

const PostItems = (arr) => {
  if (arr.posts.length > 0) {
    return arr.posts.toReversed().map((e, index) => {
      // console.log(e);

      let renderPost = "";
      if (e.type.includes("image")) {
        renderPost = <ImagePost prop={e} />;
      } else {
        renderPost = <VideoPost prop={e} />;
      }

      return (
        <div className="post-item" key={index}>
          <h3>Post:{e.name}</h3>
          <Link to={`${e.name}`} state={e}>
            <button>Comment on Post</button>
          </Link>
          {renderPost}
        </div>
      );
    });
  } else {
    return <div>loading posts</div>;
  }
};

export default PostItems;

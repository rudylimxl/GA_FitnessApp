import { Link } from "react-router-dom";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

const PostItems = (props) => {
  if (props.posts === "") {
    return <div>loading posts</div>;
  } else {
    return props.posts.toReversed().map((e, index) => {
      console.log(e);
      let renderPost = "";
      if (e.contentType.includes("image")) {
        renderPost = <ImagePost prop={e} />;
      } else {
        renderPost = <VideoPost prop={e} />;
      }
      return (
        <Link to={`/post/${e._id}`} key={index} state={e}>
          <div className="post-item-wrapper">
            <div className="post-item-media">{renderPost}</div>
            <div className="post-item-texts">
              <h3>Title:{e.title}</h3>
              <h5>Description:{e.description}</h5>
            </div>
          </div>
        </Link>
      );
    });
  }
};

export default PostItems;

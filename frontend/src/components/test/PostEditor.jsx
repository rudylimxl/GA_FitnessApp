import { useLocation } from "react-router-dom";
import ImagePostEditor from "./ImagePostEditor";
import VideoPostEditor from "./VideoPostEditor";

const PostEditor = () => {
  const { state } = useLocation();

  let renderPost = "";
  if (state.type.includes("image")) {
    renderPost = <ImagePostEditor prop={state} />;
  } else if (state.type.includes("video")) {
    renderPost = <VideoPostEditor prop={state} />;
  } else {
    renderPost = <p>Unsupported file type</p>;
  }

  //   let actionB
  return (
    <div className="post-editor-wrapper">
      <h2>Edit your posts here</h2>
      {renderPost}
      {/* <p>post : {state.name}</p>
      <p>type: {state.type}</p>
      <p>url: {state.url}</p> */}
    </div>
  );
};

export default PostEditor;

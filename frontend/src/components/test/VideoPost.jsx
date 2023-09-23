const VideoPost = (prop) => {
  return (
    <video
      src={prop.prop.url}
      height="250px"
      controls
      style={{ display: "block", margin: "5px auto" }}
      id="bkr-video"
    ></video>
  );
};

export default VideoPost;

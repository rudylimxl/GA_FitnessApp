import { useRef } from "react";
import { useScreenshot } from "use-react-screenshot";
import FileRobot from "./Filerobot";

const VideoPostEditor = (prop) => {
  const videoPlayerRef = useRef(null);

  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });

  const getImage = () => takeScreenshot(videoPlayerRef.current);
  return (
    <div>
      <video
        crossOrigin="anonymous"
        src={prop.prop.url}
        height="250px"
        controls
        style={{ display: "block", margin: "5px auto" }}
        ref={videoPlayerRef}
      ></video>
      <button onClick={getImage}>Take screenshot</button>
      <img src={image}></img>
      {/* {screenshot && <img src={screenshot}></img>} */}
      <FileRobot url={image} />
    </div>
  );
};

export default VideoPostEditor;

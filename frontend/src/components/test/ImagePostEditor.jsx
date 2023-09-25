import FileRobot from "./Filerobot";

const ImagePostEditor = (prop) => {
  console.log({ prop });
  return (
    <div>
      <img src={prop.prop.url} width="80%"></img>
      <FileRobot url={prop.prop.url} />
    </div>
  );
};

export default ImagePostEditor;

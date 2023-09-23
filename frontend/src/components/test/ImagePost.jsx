const ImagePost = (prop) => {
  console.log({ prop });
  return <img src={prop.prop.url} width="80%"></img>;
};

export default ImagePost;

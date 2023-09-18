const PostImages = (arr) => {
  if (arr.posts.length > 0) {
    return arr.posts.toReversed().map((e, index) => {
      console.log(e);
      if (e.type.includes("image")) {
        return (
          <>
            <p>
              filename:{e.name}, {e.type}
            </p>
            <img src={e.url} key={index} height="300px"></img>
          </>
        );
      } else if (e.type.includes("video")) {
        return (
          <>
            <p>
              filename:{e.name}, {e.type}
            </p>
            <video src={e.url} key={index} height="250px" controls></video>
          </>
        );
      }
    });
  } else {
    return <div>loading posts</div>;
  }
};

export default PostImages;

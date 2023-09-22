import axios from "axios";
import { useEffect, useState } from "react";
import PostItems from "./PostItems";

const Posts = () => {
  const [posts, setPosts] = useState("");

  // const getPostLists = () => {
  //   axios.get("http://localhost:8000/posts/files").then((res) => {
  //     allPosts = res.data.message;
  //     setFiles(allPosts);
  //   });
  // };

  const getPostLists = () => {
    axios
      .get("http://localhost:8000/posts", {
        params: {
          userId: "6505b4f0940b11b3fe8a55d9",
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostLists();
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      <PostItems posts={posts}></PostItems>
    </div>
  );
};

export default Posts;

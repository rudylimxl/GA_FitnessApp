import axios from "axios";
import { useEffect, useState } from "react";
import PostItems from "./PostItems";

const Posts = () => {
  let allPosts = [];
  const [files, setFiles] = useState("");

  const getPostLists = () => {
    axios.get("http://localhost:8000/posts/files").then((res) => {
      allPosts = res.data.message;
      setFiles(allPosts);
    });
  };

  useEffect(() => {
    getPostLists();
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      <PostItems posts={files}></PostItems>
    </div>
  );
};

export default Posts;

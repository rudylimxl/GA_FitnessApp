import axios from "axios";
import { useEffect, useState } from "react";
import PostItems from "./PostItems";

const Posts = () => {
  const [posts, setPosts] = useState("");
  const [success, setSuccess] = useState(false);

  // const getPostLists = () => {
  //   axios.get("http://localhost:8000/posts/files").then((res) => {
  //     allPosts = res.data.message;
  //     setFiles(allPosts);
  //   });
  // };

  const getPostLists = () => {
    const userDetailId = sessionStorage.getItem("userdetail");
    console.log(userDetailId);
    axios
      .get("http://localhost:8000/posts", {
        params: {
          userId: userDetailId,
        },
      })
      .then((res) => {
        setPosts(res.data);
        console.log(res);
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
      <div className="posts-container">
        <PostItems posts={posts}></PostItems>
      </div>
    </div>
  );
};

export default Posts;

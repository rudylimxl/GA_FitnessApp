import axios from "axios";
import { useEffect, useState } from "react";
import PostItems from "./PostItems";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState("");
  const [success, setSuccess] = useState(false);

  // const getPostLists = () => {
  //   axios.get("https://strongerfitnessapp.onrender.composts/files").then((res) => {
  //     allPosts = res.data.message;
  //     setFiles(allPosts);
  //   });
  // };

  const getPostLists = () => {
    axios
      .get("https://strongerfitnessapp.onrender.com/posts", {
        params: {
          userId: userId,
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
  }, [userId]);

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

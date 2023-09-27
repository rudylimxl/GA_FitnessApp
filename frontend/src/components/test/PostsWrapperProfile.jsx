import Posts from "./Posts";

const PostsWrapperProfile = () => {
  //Get id of logged in user
  const userDetailId = sessionStorage.getItem("userdetail");

  return <Posts userId={userDetailId} />;
};

export default PostsWrapperProfile;

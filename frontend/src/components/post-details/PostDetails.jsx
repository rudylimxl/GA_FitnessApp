import AddComment from "./AddComment";
import PostDescription from "./PostDescription";
import PostTags from "./PostTags";

const PostDetails = () => {
  return (
    <>
      <h2>Title of post</h2>
      <PostTags />
      <PostDescription />
      <AddComment />
    </>
  );
};

export default PostDetails;

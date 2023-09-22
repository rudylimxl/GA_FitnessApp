/* eslint-disable react/prop-types */
import AddComment from "./AddComment";
import PostDescription from "./PostDescription";
import PostTags from "./PostTags";

const PostDetails = ({ postDetails }) => {
  return (
    <>
      <h2>{postDetails.title}</h2>
      <PostTags tags={postDetails.tags} />
      <PostDescription description={postDetails.description} />
      <AddComment />
    </>
  );
};

export default PostDetails;

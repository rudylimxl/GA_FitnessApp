import AddComment from "./AddComment";
import PostDescription from "./PostDescription";
import PostTags from "./PostTags";

const PostDetails = (props) => {
  return (
    <>
      <h2>{props.data.title}</h2>
      <PostTags tags={props.data.tags} />
      <PostDescription desc={props.data.description} />
      <AddComment />
    </>
  );
};

export default PostDetails;

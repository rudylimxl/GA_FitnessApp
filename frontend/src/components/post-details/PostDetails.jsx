/* eslint-disable react/prop-types */
import AddComment from "./AddComment";
import PostDescription from "./PostDescription";
import PostTags from "./PostTags";

const PostDetails = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.title}</h2>
      {/* <PostTags tags={props.tags} /> */}
      <PostDescription desc={props.description} />
      <AddComment
        alert={props.alert}
        _id={props._id}
        editedImage={props.editedImage}
      />
    </>
  );
};

export default PostDetails;

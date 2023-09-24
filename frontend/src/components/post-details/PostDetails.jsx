/* eslint-disable react/prop-types */
import AddComment from "./AddComment";
import PostDescription from "./PostDescription";
import PostTags from "./PostTags";

const PostDetails = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.data.title}</h2>
      <PostTags tags={props.data.tags} />
      <PostDescription desc={props.data.description} />
      <AddComment
        alert={props.alert}
        _id={props.data._id}
        editedImage={props.editedImage}
      />
    </>
  );
};

export default PostDetails;

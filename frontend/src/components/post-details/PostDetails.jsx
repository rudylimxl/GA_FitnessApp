/* eslint-disable react/prop-types */
import AddComment from "./AddComment";
import PostDescription from "./PostDescription";
import PostTags from "./PostTags";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const PostDetails = (props) => {
  console.log("details", props);
  if (props === null) {
    return;
    <Box sx={{ display: "flex", margin: "50px auto", width: "10%" }}>
      <CircularProgress />
    </Box>;
  } else {
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
  }
};
export default PostDetails;

import Posts from "./Posts";
import { useParams } from "react-router-dom";

const PostsWrapper = () => {
  // Get the id of the specific user's page, Access the id parameter from the URL using useParams
  const { id } = useParams();

  // Render the Posts component and pass the id as a prop
  return <Posts userId={id} />;
};

export default PostsWrapper;

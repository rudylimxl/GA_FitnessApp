import { useParams } from "react-router-dom";
import Navbar from "./test/Navbar";
// import useSearch from "../hooks/useSearch";

const SearchResult = () => {
  const inputParams = useParams();

  //get searched information for users and posts from database
  // const searchData = useSearch(inputParams.input);

  return (
    <>
      <Navbar />
      <h1>Search results</h1>
      <h3>Users tagged with '{inputParams.input}'</h3>
      <h3>Videos tagged with '{inputParams.input}'</h3>
    </>
  );
};

export default SearchResult;

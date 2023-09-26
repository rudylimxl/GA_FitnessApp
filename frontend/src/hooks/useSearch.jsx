/* returns matching username/post titles based on the searched input by the user */

import { useEffect, useState } from "react";

const useSearch = (userInput) => {
  const [dataToReturn, setDataToReturn] = useState({});

  useEffect(() => {
    const getData = async () => {
      //username
      //post titles
      //tags
    };
  }, [userInput]);

  return dataToReturn;
};

export default useSearch;

/* returns matching username/post titles based on the searched input by the user 
returns data in the form { users:[], posts:[] }
*/

import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (userInput) => {
  const [dataToReturn, setDataToReturn] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:8000/search?input=${userInput}`
      );
      setDataToReturn(response.data);
    };

    getData();
  }, [userInput]);

  return dataToReturn;
};

export default useSearch;

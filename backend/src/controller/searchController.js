import { searchPost } from "../services/postService.js";
import { searchUsername } from "../services/UserDetailService.js";

async function index(req, res, next) {
  try {
    //get users and posts that match the input search string. Only looks for and matches username or post titles/tags
    const [usernameResult, postResult] = await Promise.all([
      searchUsername(req.query.input),
      searchPost(req.query.input),
    ]);

    const responseObj = {
      users: usernameResult,
      posts: postResult,
    };

    res.json(responseObj);
  } catch (error) {
    console.error(error);
    res.send("Error searching");
  }
}

export { index };

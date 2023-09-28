import { uploadToCloudStorage } from "../services/FileService.js";
import {
  addPost,
  getAllPosts,
  getAllPostsUnread,
  getOnePost,
  deleteOnePost,
  addNewComment,
  getAllComments,
} from "../services/postService.js";

// async function create(req, res, next) {
//   try {
//     await addPost(req.body);
//     res.status(201).send("Post successfully uploaded.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error uploading post.");
//   }
// }
// (original version from  Ben)

async function create(req, res, next) {
  try {
    const uploaded = await uploadToCloudStorage(req.file, "posts");
    const postData = {
      ...req.body,
      url: uploaded.url,
      contentType: uploaded.contentType,
      userType: "user",
    };
    // right now user type and userId is hardcoded
    await addPost(postData);
    res.status(201).send("Post successfully uploaded.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading post.");
  }
}

async function index(req, res, next) {
  try {
    let allposts = await getAllPosts(req.query.userId);
    //changed from req.body.userId to req.query.userId
    //most HTTP services dont support request body in GET methods
    //using query params instead, so /posts?userId=12345
    res.json(allposts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to retrieve posts.");
  }
}
async function indexUnread(req, res, next) {
  try {
    let allposts = await getAllPostsUnread(req.query.userId);
    res.json(allposts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to retrieve posts.");
  }
}

async function show(req, res, next) {
  try {
    let onePost = await getOnePost(req.params.id);
    res.json(onePost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to retrieve post.");
  }
}

async function deletePost(req, res, next) {
  try {
    await deleteOnePost(req.params.id);
    res.send("Post successfully deleted.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to delete post.");
  }
}

async function createComment(req, res, next) {
  try {
    if (req.file) {
      //upload image to GCP if there is a file received
      const uploaded = await uploadToCloudStorage(req.file, "comments");
      //modify req.body to add url
      req.body.url = uploaded.url;
    }

    await addNewComment(req.params.id, req.body);
    res.status(201).send("Comment added.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add comment.");
  }
}

async function indexComment(req, res, next) {
  try {
    let allComments = await getAllComments(req.params.id);
    res.json(allComments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to get comments.");
  }
}

export {
  create,
  index,
  indexUnread,
  show,
  deletePost,
  createComment,
  indexComment,
};

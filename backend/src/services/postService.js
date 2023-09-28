import Posts from "../models/Post.js";
import UserDetail from "../models/UserDetail.js";
import mongoose from "mongoose";

// Add a new post to DB
async function addPost(postDetails) {
  try {
    await Posts.create(postDetails);
  } catch (error) {
    throw error;
  }
}

// Get all posts for a specific user from DB
async function getAllPosts(userId) {
  try {
    let allPosts = await Posts.find({ user: userId });
    return allPosts;
  } catch (error) {
    throw error;
  }
}

// Get all posts for a specific user with unread comments from DB
async function getAllPostsUnread(userId) {
  const pipeline = [
    {
      //Select posts for the specific userId
      $match: {
        user: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      //Filter out comments where isRead is false
      $addFields: {
        comments: {
          $filter: {
            input: "$comments",
            cond: {
              $eq: ["$$this.isRead", false],
            },
          },
        },
      },
    },
    {
      // specify which fields you want to return
      $project: {
        _id: 1,
        title: 1,
        comments: 1,
      },
    },
  ];

  try {
    let allPosts = await Posts.aggregate(pipeline).exec();
    return allPosts;
  } catch (error) {
    throw error;
  }
}

// Get one post by the post id from DB
async function getOnePost(id) {
  try {
    let post = await Posts.findById(id);
    return post;
  } catch (error) {
    throw error;
  }
}

// Delete a specific post from DB
async function deleteOnePost(id) {
  try {
    await Posts.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
}

// Add a new comment for a specific post to DB
async function addNewComment(id, commentInfo) {
  try {
    const post = await Posts.findById(id);
    post.comments.push(commentInfo);
    await post.save();
  } catch (error) {
    throw error;
  }
}

// Get all comments for a specific post from DB
async function getAllComments(id) {
  try {
    let post = await Posts.findById(id).populate({
      path: "comments",
      populate: { path: "user" },
    });

    //returns an array of all comments as objects
    return post.comments;
  } catch (error) {
    throw error;
  }
}

// Get all posts from DB where a post title/tag matches the input string
async function searchPost(inputStr) {
  try {
    let posts = await Posts.find({
      $or: [
        { title: { $regex: new RegExp(inputStr, "i") } },
        { tags: { $regex: new RegExp(inputStr, "i") } },
      ],
    })
      .select("-comments")
      .populate("user");
    // let posts = await Posts.find({ $text: { $search: inputStr } })
    //   .select("-comments")
    //   .populate("user");

    return posts;
  } catch (error) {
    throw error;
  }
}

export {
  addPost,
  getAllPosts,
  getAllPostsUnread,
  getOnePost,
  deleteOnePost,
  addNewComment,
  getAllComments,
  searchPost,
};

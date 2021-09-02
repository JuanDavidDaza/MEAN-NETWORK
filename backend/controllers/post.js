const Post = require("../models/post");
const mongoose = require("mongoose");

const registerPost = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  let existingPost = await Post.findOne({ name: req.body.name });
  if (existingPost) return res.status(400).send("The Post already exists");

  let post = new Post({
    name: req.body.name,
    description: req.body.description,
    userId: req.user._id,
    dbStatus: true,
  });

  let result = await post.save();
  if (!result) return res.status(400).send("Failed to register post");
  return res.status(200).send({ result });
};

const listPost = async (req, res) => {
  let post = await Post.find({ userId: req.user._id });
  if (!post || post.length === 0)
    return res.status(400).send("You have no posts");
  return res.status(200).send({ post });
};



const deletePost = async (req, res) => {
  let validId = mongoose.Types.ObjectId.isValid(req.params._id);
  if (!validId) return res.status(400).send("Invalid id");

  let post = await Post.findByIdAndDelete(req.params._id);
  if (!post) return res.status(400).send({ message: "Post not found" });
  return res.status(200).send({ message: "Post deleted" });
};

module.exports = { registerPost, listPost, deletePost };

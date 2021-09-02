const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  description: String,
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const post = mongoose.model("post", postSchema);
module.exports = post;

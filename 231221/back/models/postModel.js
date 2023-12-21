// postModel.js
const mongoose = require("mongoose");

// Post 스키마 정의
const postSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  writer: String,
  wdate: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);
// 값 내보내기
module.exports = Post;

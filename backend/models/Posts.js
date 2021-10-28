const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, },
  text: { type: String, required: true, },
  name: { type: String, },
  // avatar: { type: String, },
  date: { type: Date, default: Date.now, },
});

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, },
  text: { type: String, required: true, },
  name: { type: String,},
  likes: [{user: { type: Schema.Types.ObjectId, }}],
  comments: {type:[commentSchema], default:[]},
  date: { type: Date, default: Date.now, },
});

const Comment = mongoose.model('comment', commentSchema);
const Post = mongoose.model('post', PostSchema);

module.exports = {
  Comment,
  Post
}

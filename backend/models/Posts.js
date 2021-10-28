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
<<<<<<< HEAD
  likes: [{
  user: { type: Schema.Types.ObjectId, },},],
=======
  likes: [{user: { type: Schema.Types.ObjectId, }}],
  comments: {type:[commentSchema], default:[]},
>>>>>>> 2b13c0b393398e81f25433bfbd721e73d9e211f0
  date: { type: Date, default: Date.now, },

<<<<<<< HEAD
  });

module.exports = mongoose.model("post", PostSchema);
=======
const Comment = mongoose.model('comment', commentSchema);
const Post = mongoose.model('post', PostSchema);

module.exports = {
  Comment,
  Post
}
>>>>>>> 2b13c0b393398e81f25433bfbd721e73d9e211f0

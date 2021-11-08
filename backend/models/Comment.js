const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId },
  text: { type: String, required: true },
  name: { type: String },
  avatar: { type: String },
  date: { type: Date, default: Date.now },
});

export default commentSchema;

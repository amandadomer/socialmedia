const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  //connect to the ID in the user model
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", },
  location: { type: String, },
  skills: { type: [String], required: true, },
  bio: { type: String, },
  date: { type: Date, default: Date.now, },
  photo: { type: String, default: ("")},
  request: { type:[String], default: []},
  friends: {type: [String], default: []}
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { Comment, Post } = require('../../models/Posts');
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const Comment = require("../../models/Comment");

// POST api/post/comment/:id
// Comment on a post

router.post("/:id", [auth, [check("text", "Text is required").not().isEmpty()]], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        // const user = await User.findById(req.user.id).select("-password");
  
        // const post = await Post.findById(req.params.id);
  
        // const newComment = {
        //   text: req.body.text,
        //   name: user.name,
        //   user: req.user.id,
        // };
        const post = await Post.findById(req.params.id);
        const new_comment = new Comment({
            text: req.body.text
        });
  
        // post.comments.unshift(newComment);
        
        post.comments.push(new_comment)
        await post.save();
        return res.send(post.comments);
        // res.json(post.comments);
      } catch (err) {
        res.status(500).send("Server Error");
      }
    }
  );
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Post = require("../../models/Posts");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

router.post(
    "/comment/:id",
    [auth, [check("text", "Text is required").not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const user = await User.findById(req.user.id).select("-password");
  
        const post = await Post.findById(req.params.id);
  
        const newComment = {
          text: req.body.text,
          name: user.name,
          user: req.user.id,
        };
  
        post.comments.unshift(newComment);
  
        await post.save();
  
        res.json(post.comments);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );
  
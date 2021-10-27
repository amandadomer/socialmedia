const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");

//route Get api/profile/me
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne(
      { user: req.user.id } /*Connects to user in model to find by id */
    ).populate("user", ["name"]); //use populate to add to from user model to the query

    if (!profile) {
      return res.status(400).json({ msg: "No profile for this user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//route POST api/profile
//update profile

//route POST api/profile
//update profile

router.post(
  "/",
  [auth, [check("skills", "Skills is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { location, skills, bio } = req.body;

    //Build profile object
    const profileFields = {}; // intialize with empty string
    //Go one by one and add each field
    // get the user from request . userid
    profileFields.user = req.user.id;
    if (location) profileFields.location = location;
    if (bio) profileFields.location = bio;
    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim()); //split turns everything into an array and map makes it so it doesn't matter how many commas you use
    }

    //update and insert data

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //update. IF user profile is found
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create. Create if profile is not found

      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//GET api/profile
//Get all profiles

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//GET api/profile/user/:user_id
//Get Profile by id

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    //Check if there is a profile
    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

//Delete api/profile
//Delete profile, user and posts

router.delete("/", auth, async (req, res) => {
  try {
    // Remove posts
    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

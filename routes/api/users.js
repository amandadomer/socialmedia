const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
// POST api/users

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("password", "Enter a password with 5 or more charaters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // make sure user exists

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "This user exists already" }] });
      }

      user = new User({
        name,
        email,
        password,
      });
      //Encrypt password
      const salt = await bcrypt.genSalt(
        10
      ); /*The more rounds, the more secure it is but the slower it goes */

      user.password = await bcrypt.hash(password, salt);

      user.save(); /*Saves user into the database */

      //Return json webtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;

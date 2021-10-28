const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

router.post('/:userId/request', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id ${req.params.id} does not exist.`);

        

    }
})
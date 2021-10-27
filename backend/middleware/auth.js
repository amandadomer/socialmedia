//This is a custom middleware that will make it so that we can send the token back to authenticate and access the protected routes

const jwt = require("jsonwebtoken");
const config = require("config");

//Need a middleware function that will take 3 things. This has access to the request and response cycle
module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No Token, denied" });
  }
  //401 means not authorized

  //Verify token

  try {
    const decoded = jwt.verify(token, config.get("jwtToken"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

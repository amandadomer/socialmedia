const express = require("express");
const connectDB = require("./config/db");

// middleware
const app = express();

// connect database
app.get("/", (req, res) => res.send("API Running"));

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

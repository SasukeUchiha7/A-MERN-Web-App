const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Get api-"/users"
router.get("/", (req, res) => {
  User.find((user) => {
    res.json(user);
  });
});

module.exports = router;

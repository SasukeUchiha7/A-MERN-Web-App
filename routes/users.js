const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Get api-"/users"
router.get("/", (req, res) => {
  User.find((user) => {
    res.json(user);
  });
});
// to add user api -"/users"
router.post("/", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save((err, result) => {
    if (!err) res.json(result);
    else res.json(err);
  });
});

module.exports = router;

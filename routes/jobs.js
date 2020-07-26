const express = require("express");

const router = express.Router();


// get -api "/jobs"
router.get("/", (req, res) => {
  res.send("Hey this is jobs api");
});

module.exports = router;

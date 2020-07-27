const express = require("express");
const Job = require("../models/job");

const router = express.Router();

// to get jobs -api- "/jobs"
router.get("/", (req, res) => {
  Job.find((err, job) => {
    if (err) {
      res.json({ msg: "Error retrieving jobs" });
    } else {
      res.json(job);
    }
  });
});

//to post jobs -api- "/jobs"
router.post("/", (req, res) => {
  const newjob = new Job({
    jobname: req.body.jobname,
    jobdesc: req.body.jobdesc,
  });
  newjob.save((err) => {
    if (err) {
      res.json({ msg: "Failed to add job" });
    } else {
      res.json({ msg: "Job added successfully" });
    }
  });
});

module.exports = router;

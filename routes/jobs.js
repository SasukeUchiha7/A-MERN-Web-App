const express = require("express");
const Job = require("../models/job");
const { remove } = require("../models/job");

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

//to add jobs -api- "/jobs"
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

router.delete("/:id", (req, res) => {
  Job.remove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;

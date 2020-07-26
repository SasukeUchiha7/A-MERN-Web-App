const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobname: {
    type: String,
    required: true,
  },
  jobdesc: {
    type: String,
  },
});

const Job = (module.exports = mongoose.model("jobs", JobSchema));

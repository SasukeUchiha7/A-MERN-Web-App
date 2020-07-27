const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(require("./configs/key").MONGO_URI)
  .then(() => {
    console.log("Connected to the databse");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", require("./routes/users"));
app.use("/api/jobs", require("./routes/jobs"));

const port = 5000;

app.listen(port, () => {
  console.log("Server is started at ", port);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", require("./routes/users"));

const port = 5000;

app.listen(port, () => {
  console.log("Server is started at ", port);
});

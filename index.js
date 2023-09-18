const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("The News Bengal: Your Source, Your Voice!");
});

app.listen(port, () => {
  console.log(`The News Bengal Server is running on port: ${port}`);
});

const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Basic Auth System");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

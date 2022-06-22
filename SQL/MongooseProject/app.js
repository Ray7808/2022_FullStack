const express = require("express");
const app = express();
const ejs = require("ejs");

app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

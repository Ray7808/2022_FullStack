const express = require("express");
const app = express();
const ejs = require("ejs");

//Mongoose(Connect to the MongoDB)
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //假如有連接成功
    console.log("Connected to MongoDB.");
  })
  .catch((err) => {
    //假如連接失敗
    console.log("Connection Failed.");
    console.log(err);
  });

app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

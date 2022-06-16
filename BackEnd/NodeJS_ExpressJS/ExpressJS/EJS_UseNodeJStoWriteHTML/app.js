const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware
app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", (req, res) => {
  // res.send("This is homepage.");
  console.log(res.statusCode);
  res.render("index.ejs"); //render是處理解釋ejs的意思
});

//這個是可以根據輸入的網址決定產生的姓名名稱
app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("person.ejs", { name });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
// ./BackEnd/NodeJS_ExpressJS/ExpressJS/EJS_UseNodeJStoWriteHTML/app.js

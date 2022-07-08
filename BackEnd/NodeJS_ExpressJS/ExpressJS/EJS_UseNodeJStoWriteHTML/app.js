const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware(for CSS)
app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", (req, res) => {
  // res.send("This is homepage.");
  console.log(res.statusCode);
  res.render("index.ejs"); //render是處理解釋ejs的意思
});

//在ejs獲得form的資訊
app.get("/response", (req, res) => {
  //console.log(req.query);
  let { fullname, age } = req.query;
  //res.send("Thanks for sending the request!");

  res.render("response.ejs", { fullname, age });
});

//這個是可以根據輸入的網址決定產生的姓名名稱
app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("person.ejs", { name });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

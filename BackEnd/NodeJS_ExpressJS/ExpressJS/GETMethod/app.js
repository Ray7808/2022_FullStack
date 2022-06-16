const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/Wilson", function (req, res) {
  res.send("This is Wilson's page");
});
app.get("/Mike", function (req, res) {
  res.send("This is Mike's page");
});

//Routing for all(所有不屬於設定的部分都會在這裡)
//要確定這個要放在所有get的最下面
// app.get("*", (req, res) => {
//   res.send("Cannot find what you want.");
// });

//Routing for pattern
//這邊也可以同時拿到網站的資訊
//example:網址輸入 localhost:3000/fruits/apple
//就可以拿到apple
// app.get("/fruits/:someFruit", (req, res) => {
//   console.log(req.params); //這樣就可以拿到該網頁在fruits/後面的資料
//   res.send("You are looking for " + req.params.someFruit);
// });
//這邊也可以同時拿到多個網站的資訊
//example:網址輸入localhost:3000/fruits/apple
//就可以拿到fruits跟apple
app.get("/:fruits/:someFruit", (req, res) => {
  console.log(req.params); //這樣就可以拿到該網頁在fruits/後面的資料
  //method 1
  // res.send("You are looking for " + req.params.someFruit);
  //method 2 using destructor
  let { someFruit } = req.params;
  res.send("You are looking for " + someFruit);
});

//routing for query
//這邊是要處理web form回傳的資料
//相較於在另一個資料夾POST得部分，
//這邊輸入form的資訊都會在網址上
app.get("/formHandling", (req, res) => {
  console.log(req.query);
  let { fullname, age } = req.query;
  res.send(`Thanks ${fullname} for sending data!`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

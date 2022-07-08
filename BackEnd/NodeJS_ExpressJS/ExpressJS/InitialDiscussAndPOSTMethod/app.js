const express = require("express");
const app = express();
const path = require("path");
//下面這兩個只有當post的時候才會用到
const bodyParser = require("body-parser");
//middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  // res.send("<h1>This is the homepage</h1>"); //一次只能送一個response
  // res.sendFile(__dirname + "/index.html"); //這邊是嘗試送檔案給User
  //這邊是假如想嘗試做API
  //   let Wilson = {
  //     name: "Wilson Ren",
  //     age: 25,
  //   };
  //   res.send(Wilson);

  //這邊是要處理web form回傳的資料
  //首先先把html傳到User那邊
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
app.post("/formHandling", (req, res) => {
  console.log(req.body);
  let { fullname, age } = req.body;
  console.log(fullname);
  console.log(age);
  res.send(
    `Thanks for posting. Your name is ${fullname}, and your age is ${age}`
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

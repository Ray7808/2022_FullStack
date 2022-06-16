const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>This is the homepage</h1>"); //一次只能送一個response
  // res.sendFile(__dirname + "/index.html"); //這邊是嘗試送檔案給User

  //這邊是假如想嘗試做API
  //   let Wilson = {
  //     name: "Wilson Ren",
  //     age: 25,
  //   };
  //   res.send(Wilson);
});
app.get("/Wilson", function (req, res) {
  res.send("This is Wilson's page");
});
app.get("/Mike", function (req, res) {
  res.send("This is Mike's page");
});

//Routing for all(所有不屬於設定的部分都會在這裡)
//要確定這個要放在所有get的最下面
app.get("*", (req, res) => {
  res.send("Cannot find what you want.");
});

//Routing for pattern

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

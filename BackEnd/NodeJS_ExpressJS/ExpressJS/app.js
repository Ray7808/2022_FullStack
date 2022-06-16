const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //   res.send("<h1>Hello Heeeeeeeee</h1>");//一次只能送一個response
  res.sendFile(__dirname + "/index.html"); //這邊是嘗試送檔案給User

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

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

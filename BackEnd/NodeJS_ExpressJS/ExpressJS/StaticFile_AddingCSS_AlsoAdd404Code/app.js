const express = require("express");
const app = express();
const path = require("path");

//Serving a static file
//Here is that for adding the CSS address
//Middleware
app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", function (req, res) {
  console.log(res.statusCode);
  //這邊是可以結合上面的app.use得到CSS檔案的資訊
  // res.sendFile(path.join(__dirname, "index.html"));

  //這邊是測試當正常打時，會得到什麼
  res.send("This is the homepage");
});
app.get("/Wilson", function (req, res) {
  console.log("This is Wilson page");
  console.log(res.statusCode);
  res.send("This is Wilson page");
});

//假如沒有連到我們需要的位置，就輸出404
//並且導到error.html
app.get("*", (req, res) => {
  res.status(405);
  console.log(res.statusCode);
  // res.send("No page found");
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  //console.log(__dirname);
  console.log("Server is running on port 3000.");
});

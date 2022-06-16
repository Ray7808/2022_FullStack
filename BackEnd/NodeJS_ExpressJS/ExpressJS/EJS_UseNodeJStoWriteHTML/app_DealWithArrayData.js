const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware(for CSS)
app.use("/styles", express.static(__dirname + "/styles"));

app.get("/", (req, res) => {
  //DataBase
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "Super hot" },
    { name: "Java", rating: 8.6, popularity: 8.2, trending: "Same" },
    { name: "C++", rating: 6.6, popularity: 7.7, trending: "Same" },
    { name: "PHP", rating: 2.5, popularity: 4.7, trending: "Decreasing" },
    { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "Same" },
  ];

  res.render("index2.ejs", { languages }); //render是處理解釋ejs的意思
});

//在ejs獲得form的資訊
app.get("/response", (req, res) => {
  //console.log(req.query);
  let { fullname, age } = req.query;
  //res.send("Thanks for sending the request!");

  res.render("response2.ejs", { fullname, age });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

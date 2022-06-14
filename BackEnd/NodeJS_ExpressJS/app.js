//用filename跟dirname查看自己使用的js檔案所在位置
//這些在之後建構後端會用到
// console.log(__filename);
// console.log(__dirname);

//Module information
// console.log(module.exports); //原先exports裡面沒有任何東西，要輸出給別人用前，要先exports(詳見try1.js)

//import module
//這邊我們用require拿到try的function
// let try1 = require("./try1");
// console.log(try1);
// try1.morning("Ruby");
// let try2 = require("./try2");
// try2.night("Oven");
//這邊可以直接輸出try1來看到裡面有什麼資訊
// console.log(try1);

//import 一整個資料夾的js檔(先創建index.js把所有js的function包進去)
//再用這個外部主要使用的js檔require那個包整個資料夾的js檔
// let greeting = require("./greeting");
// console.log(greeting);
// greeting.morning("Hey");

//Node內建的module
//1.path 可以顯示該js路徑，使用join可以新增額外的東西
// let path = require("path");
// console.log(path.join(__dirname, "try.js"));
//2.url 可以針對自己撰寫的網頁，透過這個url套件輸出或是拿到網頁的相關資料
// let url = require("url");
//3.fs(file system) 可以自動創建新的檔案並在裡面寫一些內容或是function
//這邊是先創建並寫文件
// const fs = require("fs");
// fs.writeFile("try.txt", "Today is a good day", (e) => {
//   if (e) throw e;
//   console.log("File has been written");
// });
//這邊則是讀取文件
const fs = require("fs");
fs.readFile("./BackEnd/NodeJS_ExpressJS/try.txt", "utf8", (e, data) => {
  if (e) throw e;
  console.log(data);
});

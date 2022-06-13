- 動態網頁與靜態網頁

  1. 靜態網頁：HTML,CSS,JavaScript 已經寫好了，
     使用者只要進入直接跟 Server 溝通就行。
  2. 動態網頁：當使用者向 Server 傳遞一個要求時，
     Server 會在 Server-side script 跟 database 做好網站之後再回傳給使用者。
     常見的動態網頁：FB, Youtube

- Module Wrapper

  當用 commend line 或是其他非瀏覽器來運行 js 檔案時，
  會經過 Module wrapper。
  也就是說，它在執行這個 code 時，會把這個程式碼包起來，
  然後原先 global scope 的部分都會變成 functional scope，
  就會比較好用(??)
  詳細資料在 node.js 網站點選 doc 之後選取右邊的 Module:CommonJS modules。
  這些在之後使用後端會用到。

- What's a NodeJS module?

  - Module in Node.js is a "simple or complex functionality" organized in single or multiple JavaScript files which can be reused throughout the Node.js application.

  - There are built-in modules in Node.js, but we can also make our own modules.

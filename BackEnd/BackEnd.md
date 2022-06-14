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

  - console.log(module):可以看到使用什麼 js 檔案跟顯示各個資訊。

  - 可以透過`module.exports`跟`require`來使用其他 js 檔裡面的函式(詳見 try1.js 跟 app.js)。

  - 假如因為太多函式，因此放到一個資料夾，然後想一次使用他們的話，
    可以先創建資料夾將檔案都放進去，然後創建一個額外的 js 檔(index.js)，
    負責輸出這些套件的 js 檔，然後再從主要的 js 去 require index.js，
    這樣所有資料夾內有 exports 的檔案就都可以使用。

  - Node 內建的 module

    詳細資料在 node.js 網站點選 doc 之後的頁面左手邊。

    1. path
    2. url
    3. fs(file system)

  - IP, DNS, Port

    1. IP address
       由四個 bytes(1 個 bytes 有 8 個 bits)組成。
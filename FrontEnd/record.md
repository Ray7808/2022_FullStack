# 相關套件

- `Bootstrap`

  就像是 html 跟 css 的圖書館，因此可以透過 Bootstrap 裡面內建的 component 來快速建立想要的網頁，而且是 RWD 的介面。

- `User snippet`

  VSCode 裡面有內建的 user snippet(在 setting 那邊點開就有)，可以根據自己的需求建構對應的快捷鍵。（目前有建構 `!`(完整的 html)跟`icon`(網頁的圖示)

  假如想快速將 user snippet 建立好，
  可以找尋這個網站：`Snippet generator`，
  裡面有根據你的 IDE 快速建立對應 snuppet 的程式碼。

- `Unsplash 以及 Pexels`

  這兩個網站裡面是各種免費的圖片，可以使用且不用註明來源。

- `Font awesome`

  這個是有些免費 icon 的網站，只是要註冊帳號，裏面有些 icon 要付費才能做使用。

- `icon monster`

  這個是全都免費的 icon 網站，只是樣式相較古老一些。

- `icon8`

  這個雖然可以下載，但是要使用的話要註明來源才可以做使用。這邊稍微提到可以下載 SVG 類型的檔案，
  第一是這個可以直接丟到 Figma 裡面做微調(其他的沒辦法)，第二是這個因為是向量的圖形，因此
  無論拉大拉小都不會有失真或模糊的情形。之後用 Figma 修改完後可以再輸出 png 檔給網頁使用。

- `unDraw Illustrations`

  這個網站是當有時想用一些簡單的圖片或人物說明想使用的部分，可以免費下載這裡的 SVG 檔，
  之後在 Figma 上進行修改。

- `Freepik stories animation`

  跟 unDraw 一樣是可以下載 SVG 檔，差別是想使用的話需要註明出處，另外這個網站可以提供動畫效果，可以挑選合適的動畫及圖片做使用。

- `導覽列與平滑移動`

  通常一班網頁最上面會有個導覽列，可以幫助使用者快速移動到同頁面的其他位置。
  但有時移動過程是瞬間的，就比較沒有良好的使用者體驗。
  這邊除了加入導覽列(設定 a 標籤與 id 連結)外，可以在連結的 css 檔案裡輸入：

  > `html { scroll-behavior:smooth }`

  這樣在使用導覽列時，就會平滑地移動過去了。

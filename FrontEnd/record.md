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

- `CSS tricks`

  這是一個提供 css 多種小技巧的網站，
  可以透過想玩的特效等等的部分，上去找對應的技巧，
  像是 shadow(陰影)或是 flexbox 等等。

- `scrollbar(下拉式)`

  這邊可以搜尋`w3school scrollbar`，看到對應的資訊，
  一般來說網站右邊有個可以往上往下拉的長條棒，
  可以針對他進行設定或是修改，
  設定的方式就是對 scrollbar 進行。

- `tinyPNG(線上壓縮影像網站)`

  這是一個線上壓縮影像的網站。因為上傳檔案到網站上時，有時使用開源的架站空間會有限制，因此可使用這個網站先進行影像的壓縮，之後就可以透過上傳到架站空間，進而讓使用者看到你製作的網站

- `Netlify(架站網站)`

  這是一個可以免費架設網站的地方，但並不是唯一的。
  其他像是`AWS`或是`cpanel(付費)`都具有架設網站的功能。

# Document Object Model (DOM)文件物件模型

# Window Object Properties

## 以下均為 Object

- Console

  - log()
  - error() `跟log()用法一下，可以在必要的時候給自己一些警示訊息。`

- Document

- LocalStorage

- SessionStorage

`但這不代表所有的window object的properties都是object`
`像是number、boolean或是string就不是object`

---

## What exactly is DOM?

- `DOM中的D(document)代表HTML document`

- `This model means all HTML elements are objects and they all have their properties and methods`

---

## Document Object methods

常見的 methods:

- addEventListener() `##重要！`

- createElement() `##重要！`

- getElementById()
  ex: let example = document.getElementById(`ID名稱`)

- getElementsByClassName() `#可同時多選`

- querySelector() `##重要！`

- querySelectorAll() `##重要！`

- Arrow function expression

  example: let OAO=()=>{blabla}
  假如用`this`的話指的是`window`不是該物件。
  除非用 OAO(){blabla}裡面用`this`只的才是該物件。

- forEach function

  使用這個 forEach 代表裡面的參數會針對這個 array 裡面所有的參數帶入設定的 function。裏面裡面使用的是`CallBack function`裡面的參數分別代表(`currnetValue`,`index`)`(重要！)`

---

- array

  裡面包含 length, index
  可以使用 push, pop, shift, unshift

- HTMLCollection

  example:使用 getElementsByClassName 取得多個 html 標籤

- NodeList

  example:使用 querySelectorAll 抓取所有的 html 標籤
  跟 HTMLCollection 相似，都具備同樣的長度性質，也具備 index 的資訊。
  但是跟 array 不一樣，所以 push、pop 等功能沒辦法使用。

`重要！` array 跟 NodeList 都可以使用 forEach function，但是 HTMLCollection 無法。

---

## Element object

以下是 element object 的描述：

- Different HTML element `might have its own methods and properites.`

- All HTML elements must have properties and methods from this list.

  - addEventListener()

  - appendChild()

    可以透過 js 來新增標籤及對應內容。

  - children

    `return HTMLCollection`

  - childNode

    `return NodeList`

  - classList(add(),remove(),toggle(),contains())

    這邊是可以透過先用`querySelector`得到標籤(class)內容，
    再透過上面的四個來新增移除想加入的 class 屬性。

    toggle 是表示當選取的標籤或 class 沒有遇新增的 class 時，可以增加它，但是假如已經擁有的話就會移除它。

    contains(`欲確認的class`)：因此 contains 會回傳 true 或 false 來確認是否該標籤裡面是否具有欲確認的 class。

  - getAttribute()

    這個是可以針對已經設定 href, title 等等屬性的標籤，
    可以透過 JS 抓取這些屬性並且拿來運用。

  - innerHTML, innerText

    `可以透過這兩個元素修改該標籤顯示的內容`
    他們之間唯一的差別就是`innerHTML`會被當作 HTML 來閱讀，但是`innerText`則是當作 string。

    ex:<mark>I am a man </mark>在`innerHTML`就會顯示黃色背景，在`innerText`則會將`<mark>`等元素顯示出來。

  - parentElement

  - querySelector()

  - querySelectorAll()

    `return NodeList`

    假如先用 `querySelector`抓取外部的 `section` 標籤，再用 `querySelectorAll` 抓取 section 內部的 h1 標籤的話，
    這樣外部的 h1 標籤就不會被抓到，這樣可以只針對 section 內部的標籤做修改。

    Example:

    `let section = document.querySelector("section");`

    `let redP = section.querySelectorAll("p.red");`

  - remove()

    假如先用`querySelector`抓取對應的標籤，就可以使用`remove(該標籤)`來消除該標籤及內容。

    example:

    `let heading = document.querySelector("h1);`

    `heading.remove();`

---

# 雜語

- Dynamic header：

  假如想針對頁面移動到不同位置，然後 header 有不同的變化的話，
  可以使用`addEventListener("scroll")`這個屬性，搭配`window.pafeYOffset` 就可以根據不同的滑動結果去設定頁面的各個屬性。

- Event Bubbling`(重要！)`
  假如用兩層標籤包裹並各別加入`addEventListener`，譬如設定兩個`div`標籤，並設定`"click"`的屬性，這樣要是點選裡面的`div`標籤的話，外面的`div`標籤也會啟動，但是只有點選外面的`div`標籤則不會啟動裡面的，這個就叫做`Event Bubbling`。

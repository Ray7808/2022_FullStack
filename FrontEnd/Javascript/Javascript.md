# 常見 JS 函數

- console.log()

- alert()

- prompt()

- let, const and var

- push(新增最後元素), pop(刪除最後元素), shift(刪除第一元素), unshift(新增第一元素)

- setInterval(`函 式名稱`, `間隔時間`)

- clearInterval()

# Document Object Model (DOM)文件物件模型

# Window Object Properties

## 以下均為 Object

- Console

  - log()
  - error() `跟log()用法一下，可以在必要的時候給自己一些警示訊息。`

- Document

- LocalStorage
- SessionStorage

  Storage is a place to store data in browser (This is not database)

  key value pair (Both must be string. If the value is not string, thin it would be cast to string.)
  <br/>這意味著一個 name 連結一個 value

  以下是`localStorage`和`sessionStorage`都可以使用的 method:

  - setItem(key, value)

  - getItem(key)

  - removeItem(key)

  - clear()

    <mark>(重要)key 是不能重複的</mark><br/>
    <mark>(重要)Storage 只能儲存 String，不管是 key 還是 value。假如輸入其他的，他還是會把輸入轉成 String</mark>

  `Local storage`和`session storage`主要的差別在於當使用者關閉瀏覽器時， `session storage`就會被破壞掉，但是`local storage`則沒有有效期限(假如沒有刪掉的話會一直存在)

  ## 要如何儲存其他型態的 data?

  這邊可以使用 JSON(JavaScript Object Notation)

  - JSON.stringify()

  - JSON.parse()

<br/><br/>
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

    <mark>toggle 是表示當選取的標籤或 class 沒有遇新增的 class 時，可以增加它，但是假如已經擁有的話就會移除它。<mark />

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

  假如想避免`Event bubbling`的問題，可以使用一種叫做`stopPropogation()`
  的 function，因此可以在內層的`div`標籤(剛剛的例子)，加入`stopPropogation()`
  即可以消除`Event bubbling的問題`。(詳見 app.js)。

- 為什麼要把 JavaScript 的程式放在 html 的最下面？

  - 因為網站需要時間來載入 JS 的程式碼，因此需要先給使用者展示一些其他畫面。
  - 瀏覽器要先讀取所有的 `html` 和 `css` 才能使用 `DOM`。

---

# Advanced JavaScript

## Part 1

<mark>內容都在 ./AdvancedJSPart1.js 裏面。<mark />

## Part 2

<mark>內容除了搭配
./AdvancedJSPart2.js 裏面外，
也會在這邊同步紀錄。
<mark />

- Global(Function) Execution Context

  當 JavaScript 在執行時，通常會經過兩階段，分別是：

  1. Creation phase：創造`window object`等參數。

  2. Execution phase：執行 Code。

- Hoisting

  - let, const, var 區別：

    1.  只有 const 需要初始化，
        let 跟 var 不用，只是會顯示 undefined 而已。

    2.  只有 var 可以重複宣告，let 跟 const 不行。

    3.  只有 let 和 var 可以重複指派值，const 不行

  - Hoisting 的現象就是代表，在 creation phase(創造參數)時，
    它會先將記憶體分給所有 funciton 宣告的變數以及 var，
    但是不會分給 let,const 還有 function expression。
    (詳見 `AdvancedJSPart2.js`)

- Scope

  Scope determines the accessibility(visibility,可見度/可接觸度)
  of these variables.

  There are three types of scope in JS:

  1. Globle Scope(All)
  2. Function Scope(All)
  3. Block Scope(for loop and if statement)(const, let)

- Closure (Scope chaining)

  1. 假如在執行時(Execution context)，
     JS 沒有找到在 function 裡面的變數被宣告時，
     它會從 Global variable 裡面去找
  2. Global 意味著記憶體分配給該 function 的位置

  - 備註:程式初始化時，變數會存到變數記憶體，
    function 會存到 funciton 記憶體，
    但要是 function 裡的變數沒有找到，
    它會往這個 function 外層的變數那邊去找看看。
    因此若想執行 fun1 裡的 fun2
    (但是 fun2 不是定義在 fun1 裡面，兩個都是分開定義的)
    又因為 fun2 沒有定義變數，因此會從 fun2 外面那層來找，不會從 fun1 裡面去找

- CallStack

  1. 是種資料結構
  2. CallStack 意味著當 JS 是單線程(single-thread)的編程語言，
     所以它一次只做一件事，因此需要一種方式來持續追蹤執行的內容。
     也因此，需要用 stack 這個資料結構，先將最外層的 func 放進記憶體，
     之後再根據要執行的 func，依序放入記憶體，之後再反過來依序釋放。

- Constructor function (可以製作大量 object 的 function)

  1. Starts with uppercase letter(通常用大寫當開頭(命名習慣))
  2. Used with "new" keyword(一個 JS 的 reserved words)
     =>創造新的空 object

- Prototype

  Prototype is a simple reference to another object; this object contains common(共用的) properties and methods across all instances(例子).

- Function methods

  1. Functions in JS are <mark>objects<mark />

  2. Bind, Call, Apply

     當你在執行這三個 function 時，要把他們當作物件來看。

     - Bind(綁定)

       要新建物件再執行它

     - call and apply

       可以得到一樣的結果，差別在於用 apply 時，參數要用 array 包住。

- Prototype Inheritance

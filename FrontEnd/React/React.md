# React

`這邊的都沒加入git裏，要去本機看檔案`

這邊可以在一個新的資料夾，然後輸入

> npx create-react-app my-app

這邊的`my-app`是可以自行設定的檔案名稱。

然後他就會開始安裝對應的套件。

之後可以先 cd 到該資料夾，再輸入

> npm start

即可看到 React 成功輸入的畫面。

---

## JSX(JavaScript eXtension)

- A React extension that allows us to write JavaScript thats looks like HTML.
- `Babel is a JavaScript compiler`. Babel is a JavaCsript compiler that includes the ability to compile JSX into regular JavaScript.

這邊可以透過`import`不同 JSReact 檔案，來輸入不同的 HTML 標籤，然後藉此利用 JS 寫大部分的網頁(詳見 jsx-practice)

- JavaScript in JSX

  這邊可以使用`{}`就可以將 js 的程式碼輸入進去，
  `forloop`的話則是用 `map function` 來達成。

- CSS in JSX

  只要透過輸入

  > import "./styles/style.css";

  就會自動套用該 CSS 的各個屬性。

- Props (properties)

  每個在 React 的 component 都有他自己的屬性。
  可以在其他 js 檔寫成一個函式(詳見`practice-jsx/props.js`)，
  之後再透過 `app.js` 輸入對應的參數來改變裡面的東西。

- State, state lifting, and Event handling

  套件 UUID

- useEffect

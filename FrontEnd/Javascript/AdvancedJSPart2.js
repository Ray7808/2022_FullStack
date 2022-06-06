/////////////Hoisting//////////////////
// function declaration, var
// 在執行程式前，電腦已經先找到x並先分配記憶體給它了
// console.log(x);
// var x = 10;

//同樣地，假如是在function宣告在使用function之後，
//也會因為同樣地原因而可以使用(事先分配記憶體)，
//這也是Hoisting的效果
// sayHi();
// function sayHi() {
//   console.log("Hi");
// }

//但這個情況在let上就不會發生
// console.log(x); //這邊就不能work，除非let的部分宣告在這行前面
// let x = 10;

//同樣地，const也不會發生這種情形，除非要先宣告const
// sayHi();
// const sayHi = () => {
//   console.log("Hi");
// };
/////////////Hoisting//////////////////

/////////////Scope//////////////////
// 1.Global scope(Example 1):
// 一些變數(像是var, let, const),只要是定義在外面，就會各個地方都可以使用
// 2.Function scope(Example 2):
// 假如變數(像是var, let, const)屬於function scope，
// 他只有在function裡面才有意義。
// 3.Block scope(Example 3):
// 假如變數(let, const)宣告後，
// 只能在loop或if statement裡面使用，
// 那他們就屬於block scope
// 小知識：因此就算一開始用var定義
//        之後再重複定義時，只會覆蓋原本的數值，
//        就還是可以繼續使用。

// Example 1:
// let myName = "Wilson Ren";
// function sayHi() {
//   let myName = "Obama";
//   console.log(myName + " says good morning.");

//   function sayHi2() {
//     console.log(myName + " says good morning.");
//   }
//   sayHi2();
// }
// sayHi(); //要是function裡面沒宣告myName，這邊會顯示Wilson Ren
// //因此myName=“Wilson Ren”是global variable
// sayHi(); //這邊會顯示Obama
// sayHi2(); //這行不能執行

// Example 2:
// function sayHi() {
//   let name = "Wilson";
//   console.log(name);
// }
// sayHi(); //name在function內可以使用
// console.log(name);

// Example 3:
// if (true) {
//   let x = 10;
//   console.log(x);
//   const y = 10;
//   console.log(y);
//   var z = 10;
//   console.log(z);
// }
// console.log(x); //let在scope外面無法執行
// console.log(y); //const在scope外面無法執行
// console.log(z); //var在scope外面`可以`執行

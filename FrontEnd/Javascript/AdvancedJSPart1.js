//Array concat method
// let friends1 = ["Mike", "Josh", "Doug"];
// let friends2 = ["Jim", "Nelson", "Benson"];
// console.log(friends1 + friends2);
// //假如想將兩個array連接成一個新的array，可以使用concat
// let friends = friends1.concat(friends2);
// console.log(friends);

//NaN and Infinity
// NaN and Infinity are the number data type
// 另外NaN不會等於NaN，因此若要確認該數值是否是NaN的話，
// 可以使用isNaN() 這個function來確認。

//spread operator(...) and rest parameter
//Rest parameter =>例如Math.max()
//裡面沒有定義總共輸入幾個參數
//算是JS一些內建函式的好用之處
//若是想使用在自己內建的函數時，
//可以使用spread operator達到一樣的效果
//Example:
// function checkBiggest(...numbers) {
//   console.log(numbers);
//   let biggest = -Infinity;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > biggest) {
//       biggest = numbers[i];
//     }
//   }
//   return biggest;
// }
// console.log(checkBiggest(-2, 100, 6, 7, 10, 15, 17, 20, 29));

//The applications of array concat and spread operator
// 藉由使用spread operator來連接未知的array數目也是可以的。
// let friends1 = ["Mike", "Josh", "Doug"];
// let friends2 = ["Jim", "Nelson", "Benson"];
// let friends = [...friends1, ...friends2];
// console.log(friends);

//(Important)The difference of primitive data tpyes and reference data tpyes
//(1)Primitive data types(such as Number, string ...) means that "they are not objects, and they
//don't have its own properties and methods."
//(2)Also, these primitive data types container variables do own the
//value, not just a reference to the memory.(如下所示)
//Example:
// let num1 = 100;
// let num2 = num1; //100
// num1 = 50;
// console.log(num1, num2); //50,100
//Reference data type
//(1)(Important)"Objects" and "Arrays" are reference data type!
//(2)Variables that are assigned a non-primitive value are given a
//reference to that value. “That reference points to the object's
//location in memory. The variables don't actually contain the
//value.如下所示)”
// Example講解：因為現在建立一個array(reference data type)
// 因為他們都會指到同個記憶體位置，因此會呈現一樣的結果。
// 但之前的num1,num2是各自新建一個記憶體位置來儲存變數，
// 因此不會呈現同樣的數值。(如同primitive data type的第二點所述)
//Example:
// let friends1 = ["Mike", "Josh"];
// let friends2 = friends1;
// friends1.push("Nelson");
// console.log(friends1, friends2);
//備註：
//前面提到primitive沒有properties和method，但在這邊顯然還是可以使用，
//這是因為JavaScript有個property叫做"coercion"，
//當使用這個property和primitive時，它會將primitive轉換成各種物件，
//然後就可以針對新建的物件做prototype method(像是string的toLowerCase()，單純使用string並不會有)，
//但這只是JavaScript自己使用新建的記憶體位置來做這件事，JS官方也不推薦這種寫法。

//String comparison
//JS比較都比第一個字(或數字)而已，
//Example：
// console.log("5" > "49999");

//Check whether it is object or array
// let friends = ["Mike", "Josh"];
// console.log(typeof friends);
// console.log(Array.isArray(friends));

//Advanced Array function
// map(); //創造一個新Array來塞進每個經過callback function回傳的結果
//Example:
// let languages = ["Java", "C++", "Python", "JS"];
// let upperLanguage = languages.map(function (i) {
//   return i.toUpperCase(); //一定要return
// });
// console.log(upperLanguage);
// -------------------------------------------------------------------
// find(); //在特定情況下，回傳一個array的第一個element =>就是從第一個開始往下看，回傳最先符合條件的element
// 但如果沒找到的話，會回傳undefined
//Example:
// let result = languages.find((lang) => {
//   return lang.rating > 6.5;
// });
// filter(); //在特定情況下，回傳所有elements，但要是沒有符合條件的，則會回傳一個空的array
//Example:
// let result = languages.filter((lang) => {
//   return lang.rating > 6.5;
// });
// -------------------------------------------------------------------
// 這兩個都是當符合特定條件時，回傳boolean值(true or false)
// some(); //要是array裡面有element符合條件，即回傳true
//Example:
// let result = languages.some((lang) => {
//   return lang.rating > 6.5;
// });
// every(); //要是array所有element都符合條件，即回傳true
//Example:
// let result = languages.every((lang) => {
//   return lang.rating > 6.5;
// });
// -------------------------------------------------------------------
// sort(); //排列，這邊要注意的是sort()會直接改變array本身的排列，
// 但是像toUpperCase()這種的話其實不會改變，除非用一個新的變數來裝它。
// 另外像是數字的話，因為sort()是比較string的第一個字，因此要排序數字時，
// 要用method2的方式。
// 另外若想按照字母的長度排的話，可以使用method3
//Method1
// let fruits = ["Grapes", "Apple", "Banana"];
// fruits.sort();
// console.log(fruits); //這樣就有排列到
// fruits.sort();
//Method2
// let luckies = [15, 1, 2, 16, 99, 17, 3];
// console.log(luckies.sort()); //這邊是按照字母第一個排
// let luckies2 = [15, 1, 2, 16, 99, 17, 3];
// luckies2.sort((a, b) => {
//   //   return a - b; //由小到大排
//   return b - a; //由大到小排
// });
// console.log(luckies2);
// Method3
// let fruits2 = ["Grapes", "Apple", "Watermelon"];
// fruits2.sort((a, b) => {
//   return a.length - b.length; //由長度短到長度長排
//   //   return b.length - a.length; //由長度長到長度短排
// });
// console.log(fruits2);
// -------------------------------------------------------------------
// for of loop; //增加可讀性的for loop
//Example:
// let numbers = [10, 20, 30];
// // for loop method
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// //forEach method
// numbers.forEach((n) => {
//   console.log(n);
// });
// //for of loop(可用在string, number等等，但是不能用在object)，
// //另一點是這個會直接顯示numbers裡的數值，因此不用再額外加numbers[i]，不然會顯示undefined
// for (let n of numbers) {
//   console.log(n);
// }
// //for in loop(枚舉所有在object上的性質)(簡單來說，這個是在object也可以使用的for loop)
// let Wilson = {
//   name: "Wilson ren",
//   age: 25,
//   height: 179,
//   weight: 75,
// };
// for (let i in Wilson) {
//   console.log(i);
// }
// for (let i in numbers) {
//   //在之前的array也是可以使用，只是這邊要用下面的numbers[i],
//   //不然只會跑出index的數字
//   console.log(i);
//   console.log(numbers[i]);
// }

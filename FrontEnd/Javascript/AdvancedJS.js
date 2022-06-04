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

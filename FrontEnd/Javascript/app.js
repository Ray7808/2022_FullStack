// condsole.log()
// console.log("目前正在學習JS");

//alert()
// alert("目前正在index.html文件");

// prompt()
// prompt("請輸入年齡：");
// let name2 = prompt("請輸入你的姓名：");
// console.log(name2);

//Guess game
// let game = Math.floor(100 * Math.random());
// console.log(game);

// let temp = 0;
// let temp2 = 99;
// let guess = prompt("請輸入一個0~99的數字");

// while (`guess != game`) {
//   if (guess < temp || guess > temp2) {
//     alert("Please make a valid input!");
//     continue;
//   }
//   if (guess > game) {
//     temp2 = guess;
//     guess = prompt("請輸入一個" + temp + "~" + temp2 + "的數字");
//   } else if (guess < game) {
//     temp = guess;
//     guess = prompt("請輸入一個" + temp + "~" + temp2 + "的數字");
//   } else if (guess == "break") {
//     break;
//   } else {
//     break;
//   }
// }
// alert("正確數字就是" + game + "!");

//Coding practice 1
// const friends = ["Harry", "Ron", "Snap"];
// const reversed_friends = [];

// for (let i = 0; i < friends.length; i++) {
//   reversed_friends[i] = friends[friends.length - i - 1];
// }
// console.log(reversed_friends);

//Coding practice 2
// function findBiggest(arr) {
//   let biggestNumber = -Infinity;
//   if (arr.length == 0) {
//     return undefined;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= biggestNumber) {
//         biggestNumber = arr[i];
//       }
//     }
//   }
//   return biggestNumber;
// }

// console.log(findBiggest([15, 20, 22, 16, 7]));
// console.log(findBiggest([1, 2, 3, 4, 5, 999]));
// console.log(findBiggest([-11, 0, -3, -4, -5, -999]));
// console.log(findBiggest([]));

//Coding practice 3
// function addUpTo(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(addUpTo(5));
// console.log(addUpTo(100));
// console.log(addUpTo(5000));
// console.log(addUpTo(100000));

// function printMany(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }
// printMany();

// function printEvery3() {
//   for (let i = 1; i <= 88; i++) {
//     if ((i - 1) % 3 == 0) {
//       console.log(i);
//     }
//   }
// }
// printEvery3();

// function stars(n) {
//   let a = "";
//   for (let i = 0; i < n; i++) {
//     a += "*";
//   }
//   console.log(a);
// }
// stars(3); // ***
// stars(10); // **********

// function isUpperCase(arr) {
//   if (arr[0] >= "A" && arr[0] <= "Z") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isUpperCase("ABCD")); // returns true
// console.log(isUpperCase("")); // returns false
// console.log(isUpperCase("aBCD")); // returns false

// function isAllUpperCase(arr) {
//   if (arr == "") {
//     return false;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= "Z" && arr[i] >= "A" && i == arr.length - 1) {
//       return true;
//     } else if (arr[i] <= "Z" && arr[i] >= "A") {
//       continue;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(isAllUpperCase("ABCD")); // returns true
// console.log(isAllUpperCase("")); // returns false
// console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false

// function position(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= "Z" && arr[i] >= "A") {
//       console.log(arr[i], i);
//       return;
//     } else if (i == arr.length - 1) {
//       console.log(-1);
//       break;
//     } else {
//       continue;
//     }
//   }
// }
// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2

// function findSmallCount(arr, n) {
//   let tmp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       tmp++;
//     }
//   }
//   console.log(tmp);
// }
// findSmallCount([1, 2, 3], 2); // returns 1
// findSmallCount([1, 2, 3, 4, 5], 0); // returns 0

// function findSmallerTotal(arr, n) {
//   let tmp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       tmp += arr[i];
//     }
//   }
//   console.log(tmp);
// }
// findSmallerTotal([1, 2, 3], 3); // returns 3
// findSmallerTotal([1, 2, 3], 1); // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0

// function findAllSmall(arr, n) {
//   let tmp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       tmp.push(arr[i]);
//     }
//   }
//   console.log(tmp);
// }
// findAllSmall([1, 2, 3], 10); // returns [1, 2, 3]
// findAllSmall([1, 2, 3], 2); // returns [1]
// findAllSmall([1, 3, 5, 4, 2], 4); // returns [1, 3, 2]

// function sum(arr, n) {
//   let tmp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     tmp += arr[i];
//   }
//   console.log(tmp);
// }
// sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // returns 55
// sum([]); // return 0
// sum([-10, -20, -30]); // return -60

// function stars(n) {
//   let star = "*";
//   for (let i = 0; i < n; i++) {
//     console.log(star);
//     star += "*";
//   }
// }
// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****

// function makeStars(n) {
//   let star = "";
//   for (let i = 0; i < n; i++) {
//     if (i == 0) {
//       star += "*";
//     } else {
//       star += "\n";
//       for (let j = 0; j <= i; j++) {
//         star += "*";
//       }
//     }
//   }
//   console.log(star);
// }
// // makeStars(1);
// // *
// // makeStars(2);
// // *\n**
// makeStars(5);
// // *\n**\n***\n****\n*****

// function stars2(n) {
//   let arr = [];
//   let tmp = "";
//   for (let i = 0; i < n; i++) {
//     tmp += "*";
//     arr[i] = tmp;
//     console.log(arr[i]);
//   }
//   for (let j = n - 2; j >= 0; j--) {
//     console.log(arr[j]);
//   }
// }
// stars2(1);
// *
// stars2(2);
// *
// **
// *
// stars2(3);
// *
// **
// ***
// **
// *
// stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *

// function table(n) {
//   for (let i = 1; i <= 9; i++) {
//     console.log(n + " x " + i + " = " + i * n);
//   }
// }
// table(3);
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 9 = 27

// function table9to9() {
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       console.log(i + " x " + j + " = " + i * j);
//     }
//   }
// }
// table9to9();
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// 1 x 9 = 9
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 9 x 9 = 81

// function fib(n) {
//   const f0 = 0;
//   const f1 = 1;
//   let tmp = f0;
//   let tmp1 = f1;
//   let tmp2 = 0;
//   if (n == 0) {
//     console.log(0);
//   } else if (n == 1) {
//     console.log(1);
//   } else {
//     for (let i = 2; i <= n; i++) {
//       tmp2 = tmp1 + tmp;
//       // console.log(tmp2);
//       tmp = tmp1;
//       tmp1 = tmp2;
//     }
//     console.log(tmp2);
//   }
// }
// fib(0); // returns 0
// fib(1); // returns 1
// fib(2); // returns 1
// fib(3); // returns 2
// fib(8); // returns 21

// function reverse(arr) {
//   let re = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     re += arr[i];
//   }
//   console.log(re);
// }
// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"

// function swap(arr) {
//   arr = arr.split("");
//   let tmp = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= "A" && arr[i] <= "Z") {
//       tmp += arr[i].toLowerCase();
//     } else if (arr[i] >= "a" && arr[i] <= "z") {
//       tmp += arr[i].toUpperCase();
//     }
//   }
//   console.log(tmp);
// }
// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."

// function findMin(arr) {
//   let tmp = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < tmp) {
//       tmp = arr[i];
//     }
//   }
//   console.log(tmp);
// }
// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10

// function findNthMin(arr, n) {
//   let tmp = arr.slice(0, n);
//   console.log(tmp[tmp.length - 1]);
// }
// findNthMin([1, 2, 3, 4, 5], 1); // returns 1
// findNthMin([1, 3, 5, 7, 9], 3); // returns 5

// function mySort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (arr[i] > arr[j]) {
//         let tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
//   console.log(arr);
// }
// mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

// function isPrime(n) {
//   if (n == 1) {
//     console.log("False");
//   } else {
//     let tmp = 0;
//     for (let i = 1; i <= n; i++) {
//       if (n % i == 0) {
//         tmp++;
//       }
//     }
//     if (tmp > 2) {
//       console.log("False");
//     } else {
//       console.log("Ture");
//     }
//   }
// }
// isPrime(1); // returns false
// isPrime(5); // returns true
// isPrime(91); // returns false
// isPrime(1000000); // returns false

// function confirmEnding(arr, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr[arr.length - i - 1] === arr2[arr2.length - i - 1]) {
//       continue;
//     } else {
//       console.log("False");
//       return;
//     }
//   }
//   console.log("True");
// }
// confirmEnding("Bastian", "n"); // true
// confirmEnding("Connor", "n"); // false
// confirmEnding("Open sesame", "same"); // true

// function findDuplicate(arr) {
//   let tmp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     tmp = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (i == j) {
//         continue;
//       } else if (tmp == arr[j]) {
//         console.log("True");
//         return;
//       }
//     }
//   }
//   console.log("False");
// }
// findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
// findDuplicate([]); // returns false
// findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false

// function palindrome(arr) {
//   arr = arr.toLowerCase();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[arr.length - i - 1]) {
//       continue;
//     } else {
//       console.log("False");
//       return;
//     }
//   }
//   console.log("Ture");
// }
// palindrome("bearaeb"); // true
// palindrome("Whatever revetahw"); // true
// palindrome("Aloha, how are you today?"); // false

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let tmp = "";
//     for (let j = i; j < n; j++) {
//       tmp += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       tmp += "*";
//     }
//     console.log(tmp);
//   }
// }
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******

// function inversePyramid(n) {
//   for (let i = n; i >= 0; i--) {
//     let tmp = "";
//     for (let j = i; j < n; j++) {
//       tmp += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       tmp += "*";
//     }
//     console.log(tmp);
//   }
// }
// inversePyramid(4);
// *******
//  *****
//   ***
//    *

// function factorPrime(n) {
//   let tmp = [];
//   let k = 0;
//   while (n !== 1) {
//     for (let i = 1; i < n; i++) {
//       if (n % i == 0) {
//         k = i;
//       }
//     }
//     // tmp = tmp.push(floor(n / k));
//     n = Math.floor(n / k);
//     // console.log(n);
//     tmp.push(n);
//     n = k;
//   }
//   //   console.log(tmp);
//   let result = "";
//   for (let j = 0; j < tmp.length; j++) {
//     if (j == 0) {
//       result += tmp[j];
//     } else {
//       result += " x " + tmp[j];
//     }
//   }
//   console.log(result);
// }
// factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"

// function intersection(arr, arr2) {
//   let a1, a2;
//   let result = [];
//   if (arr2.length > arr.length) {
//     a1 = arr;
//     a2 = arr2;
//   } else {
//     a1 = arr2;
//     a2 = arr;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i];
//     for (let j = 0; j < arr2.length; j++) {
//       let tmp2 = arr2[j];
//       if (tmp === tmp2) {
//         result.push(tmp);
//       }
//     }
//   }
//   console.log(result);
// }
// intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]); // returns [3, 4]

// function flatten(arr) {
//   //   let tmp = arr.flat();
//   //   console.log(tmp);
//   //   let tmp2 = tmp.flat();
//   //   console.log(tmp2);
//   //   let tmp3 = tmp2.flat();
//   //   console.log(tmp3);
//   let result = [];
//   helper(arr);
//   console.log(result);
//   function helper(arr1) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (Array.isArray(arr1[i])) {
//         helper(arr1[i]);
//       } else {
//         result.push(arr1[i]);
//       }
//     }
//   }
// }

// flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
// // // returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]

// let Wilson = {
//   name: "Wilson Ren",
//   walk() {
//     console.log("Wilson Ren is walking on the street.");
//   },
// };

// Wilson.walk();

let sayHi = (name) => {
  console.log("Hi, " + name);
};

sayHi("Jojo");

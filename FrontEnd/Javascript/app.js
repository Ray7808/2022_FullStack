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

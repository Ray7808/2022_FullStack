// condsole.log()
// console.log("目前正在學習JS");

//alert()
// alert("目前正在index.html文件");

// prompt()
// prompt("請輸入年齡：");
// let name2 = prompt("請輸入你的姓名：");
// console.log(name2);

//Guess game
let game = Math.floor(100 * Math.random());
console.log(game);

let temp = 0;
let temp2 = 99;
let guess = prompt("請輸入一個0~99的數字");

while (`guess != game`) {
  if (guess < temp || guess > temp2) {
    alert("Please make a valid input!");
    continue;
  }
  if (guess > game) {
    temp2 = guess;
    guess = prompt("請輸入一個" + temp + "~" + temp2 + "的數字");
  } else if (guess < game) {
    temp = guess;
    guess = prompt("請輸入一個" + temp + "~" + temp2 + "的數字");
  } else if (guess == "break") {
    break;
  } else {
    break;
  }
}
alert("正確數字就是" + game + "!");

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



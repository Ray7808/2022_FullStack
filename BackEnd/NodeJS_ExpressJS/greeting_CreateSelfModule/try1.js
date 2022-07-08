function morning(name) {
  console.log("Good morning, " + name);
}

// module.exports.morning = morning; //因為module太常被用，因此要去掉直接用exports也是可以的
exports.morning = morning;
//輸出一個function叫做morning，等號右邊是我們把morning(在try1.js裡的)設定為morning(等號左邊) function然後輸出。
// console.log(module.exports);

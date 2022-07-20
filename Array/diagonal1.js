let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal(list) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(list[i][list.length - i - 1]);
  }
  return arr;
}

// Do not change anything below this line
let m = parseInt(readLine());
let list = [];
for (let val = 0; val < m; val++) {
  let row = readLine().split(" ");
  list.push(row);
}
let res = rightToLeftDiagonal(list);
for (val of res) {
  console.log(val);
}

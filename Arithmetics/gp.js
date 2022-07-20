let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let first_num=parseInt(readLine());
let second_num=parseInt(readLine());
let third_num=parseInt(readLine());
let cr=second_num/first_num;
let fourth_term=third_num*cr;
console.log(parseInt(fourth_term));
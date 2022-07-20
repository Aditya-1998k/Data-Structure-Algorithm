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
// parseInt() is used to convert string data type into integer
// parseFloat() is used to conver string to floating point number

let d=parseInt("600")
let s=parseInt(readLine())
let t=parseInt(d/s)
console.log(t);
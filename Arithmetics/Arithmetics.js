let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//readLine() to take customer ip
let a=parseInt(readLine())
let b=(parseInt(readLine()))
console.log(a+b)
console.log(a-b)
console.log(a*b)
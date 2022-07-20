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
let arr=readLine().split(" ");
let num1=parseInt(arr[0]);
let num2=parseInt(arr[1]);

let sum=num1+num2;
while(sum>12){
    sum=sum-12;
}
console.log(sum)
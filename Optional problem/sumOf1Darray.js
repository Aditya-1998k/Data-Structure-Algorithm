let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let arr=readLine().split(" ");
let sum=0;
let output=[];
for(let i=0; i<arr.length; i++){
    sum=sum+parseInt(arr[i]);
    output.push(sum);
}
console.log(output)
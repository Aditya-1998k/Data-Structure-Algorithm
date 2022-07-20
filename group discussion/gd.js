let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let arr=readLine().split(" ")
let rotatation_time=parseInt(readLine())
for(let i=0; i<rotatation_time; i++){
    arr.push(arr[0])
    arr.shift()
}
for(let element of arr){
    console.log(element)
}
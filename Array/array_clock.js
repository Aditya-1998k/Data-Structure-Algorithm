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
let arr=readLine().split(" ")
let M=parseInt(readLine())
for(let i=0; i<M; i++){
        arr.push(arr[0])
        arr.shift()
}
for(let element of arr){
    console.log(parseInt(element))
}
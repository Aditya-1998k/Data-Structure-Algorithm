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
let num=parseInt(readLine())
let arr=[]
for(let i=0; i<num; i++){
    arr.push(parseInt(readLine()))
}

let arr_squere=arr.map(k=>k**2)
arr_squere.sort(function(a,b){ return a-b})
for(let element of arr_squere){
    console.log(element)
}
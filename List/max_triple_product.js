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
// sorting the array
arr.sort(function(a,b){
    return a-b
})

let p=parseInt(arr[arr.length-1])
let q=parseInt(arr[arr.length-2])
let r=parseInt(arr[arr.length-3])
console.log(p*q*r)
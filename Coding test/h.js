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

let arr3=[]
for(let i=0;i<num; i++){
   let arr=[]
    arr.push(readLine().split(" "))
    console.log(arr)
        for(let j=0; j<arr.length; j++){
            arr3.push((arr[j]))
        }
        
}
console.log(arr3)


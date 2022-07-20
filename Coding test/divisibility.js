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
let arr1=readLine().split(" ") //n=5
let n=parseInt(arr1[0]);
let x=parseInt(arr1[1]) //x=5
let arr=readLine().split(" ");  //arr[1,2,3,4,5]
let count=0
for(let i=0; i<n; i++){
    if(parseInt(arr[i])%x===0){
        count++
    }else{continue;}
}
console.log(count)
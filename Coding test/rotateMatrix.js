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
for(let i=0;i<num; i++){
    arr.push(readLine().split(" "))
}

console.log(arr[1].length)
console.log(arr)
let arr2=[]
for(let i=arr[1].length-1; i>=0; i--){
    let p=""
    for(let j=0; j<arr[1].length; j++){
        
        p=p+" "+arr[i][j]
    }

    console.log(p)

}
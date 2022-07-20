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
let n=parseInt(readLine());
let arr=[];
for(let i=1; i<=n; i++){
    let num=parseInt(readLine());
    arr.push(num)
}
let j;
for(let j=0; j<arr.length; j++){
    if(arr[j]===arr[j+1]){
        j=j+1;
    }else if(arr[j]!=arr[j+1]){
        console.log(arr[j])
    }
}
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
let arr=[]
for(let i=0; i<n; i++){
    arr.push(parseInt(readLine()))
}
let arr2=[...arr];
// console.log(arr2)
arr.sort(function(a,b){return (a-b);})
// console.log(arr)
let myMap=new Map();
for(let i=0; i<arr.length; i++){
    if(myMap.has(arr[i])==false){
        myMap.set(arr[i],i)
    }
}
for(let i=0; i<n; i++){
        console.log(myMap.get(arr2[i]))
    }




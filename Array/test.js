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
let num=parseInt(readLine());
let arr=[]
for(let i=0; i<num; i++){
    p=readLine().split(" ")
    arr.push(p)
}

let arr2=[]
for(i=0; i<num; i++){
    let inner_arr=arr[i]
    for(let j=0; j<num; j++){
        arr2.push(parseInt(inner_arr[j]))
    }
}

let sum1=0
let sum2=0
for(let i=0; i<arr2.length; i=i+num+1){
    sum1=sum1+parseInt(arr2[i])
}

for(let i=num-1; i<arr2.length-1; i=i+num-1){
    sum2=sum2+parseInt(arr2[i])
    
}
console.log(sum2+sum1)

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
let arr=[];
for(let i=1; i<=num; i++){   
    arr.push(parseInt(readLine()))
}

let arr2=[]
for(let i=0; i<num; i++){
    let p=parseInt(arr[i])
    var alpha=1
    for(let j=i+1; j<num; j++){
        if(p===parseInt(arr[j]))
        {
        alpha++
        }else
        {
            continue
        }
     }
     arr2.push(alpha)
}
if(num<=0){
    console.log(-1)
}
else{
let max=Math.max.apply(null,arr2)
for(let i=0;i<arr2.length; i++){
    if(max===arr2[i]){
        console.log(arr[i])
    }else{continue}
}
}
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
let result=[]
let count=1
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<num; j++){
        if(arr[i]<arr[j]){
            arr[i]=0
            break
        }
        
    }
    result.push(arr[i])
}
let final_result=[]
for(let i=result.length-1; i>=0; i--){
    if(result[i]!=0){
        final_result.push(result[i])
    }
    if(i===result.length-1){
        if(result[i]===0){
    
        final_result.push(0)
        }
    }
}
for(let i=0; i<final_result.length; i++){
    console.log(final_result[i])
}
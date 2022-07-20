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
for(let i=0; i<num; i++){
    arr.push(parseInt(readLine()))
}
let resultarr=[];
for(let i=0; i<num; i++){
    let result=true;
    for(let j=i+1; j<num; j++){
        if(arr[i]<=arr[j]){
            result=false;
            break;
        }
    }
    if(result===true){
        resultarr.unshift(arr[i])
    }
}

for(let element of resultarr){
    console.log(element)
}
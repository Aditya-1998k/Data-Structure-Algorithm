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
let count=1;
let arr=[];
let j;

for(let i=1; i<=n; i++){
    let num=parseInt(readLine())
    arr.push(num)
}
for(j=0; j<arr.length-3; j++){
    if(arr[j]===arr[j+1])
    {
        if(arr[j+1]===arr[j+2])
             {
                if(arr[j+2]===arr[j+3]){
                    count=4;
                    break;

                }else{continue}
             }else{continue}
    }else{continue}
}
if(count===4){
    console.log(arr[j])
}else if(count!=4){
    console.log(parseInt("-1"))
}
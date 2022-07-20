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
let arr=readLine().split(" ");
let map=new Map();
for(let i=0; i<num; i++){
    arr[i]=parseInt(arr[i]);
    //console.log(arr[i])
    let count=0;
    for(let j=1; j<=parseInt(arr[i]); j++){
       //console.log(j)
        if(parseInt(arr[i])%j==0){
                count++
            }
        }
    
    map.set(arr[i],count)
    
}
let ans=0;
for(let val of map.values()){
    if(val===2){
        ans+=1;
    }
}
console.log(ans)
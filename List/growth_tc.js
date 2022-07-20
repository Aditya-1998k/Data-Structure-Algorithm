let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let num=parseInt(readLine());  //executed 1 time
let arr=[]
for(let i=0; i<num; i++){  //n time in worse case
    arr.push(parseInt(readLine()))
}
let sum=0;
for(let j=0; j<num; j++){ //n time in worse case
    sum=sum+arr[j]
}
let avg=sum/num
if(avg>100){
    console.log("Excellent!")
}
else{
    console.log("Not Excellent!")
}
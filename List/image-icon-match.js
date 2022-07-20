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
let count=0;
let k;
let l;
let j;
for(let i=1; i<=n; i++){
    let num=parseInt(readLine());
    arr.push(num);
}
let m=parseInt(readLine());
let arr2=[];
for(j=1; j<=m; j++){
    let num2=parseInt(readLine());
    arr2.push(num2);
}
for(k=0; k<=arr.length; k++){

  for(l=0; l<=arr2.length; l++){
    if(arr2[l]=arr[k]){
      count++

    }
  }
}
console.log(count)
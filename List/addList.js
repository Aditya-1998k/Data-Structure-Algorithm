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


for(let i=0; i<num; i++){
    let arr1=readLine().split(" ")
    let arr2=readLine().split(" ")
   perform_add(arr1,arr2)
}
function perform_add(arr1,arr2){
    let sum=0;
    let carry=0;
    let result=""
    let i=0
    while(i<arr1.length && i<arr2.length){
        sum=parseInt(arr1[i])+parseInt(arr2[i]);
        carry=parseInt(sum/10)
        sum=sum%10
        result=result+ String(sum)
        i=i+1;
    }
    while(i<arr1.length){
        sum=parseInt(arr1[i])+carry;
        carry=parseInt(sum/10)
        sum=sum%10
        result=result+ String(sum)
        i=i+1;
    }
    while(i<arr2.length){
        sum=parseInt(arr2[i])+carry;
        carry=parseInt(sum/10)
        sum=sum%10
        result=result+ String(sum)
        i=i+1
    }
    if(carry!=0){
        result=result+String(carry)
    }
    console.log(result)
    console.log(arr1)
}
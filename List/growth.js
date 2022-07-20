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
let n=parseInt(readLine());  //1 time
let sum=0;   //1 time
for(let i=1; i<=n; i++){    //in worst case n time
    let num=parseInt(readLine());
    sum=sum+num;
}
let avg=sum/n;   //1 time
if(avg>100){      //1 time
    console.log("Excellent!");
}else{              //1 time in case if stmt is not exceuted
    console.log("Not Excellent!")
}






// let n=parseInt(readLine());  //1 time
// let arr=[];  //1 time
// let j;   //1 time
// let i;
// let sum=0;
// for( i=1; i<=n; i++){
//     let num=parseInt(readLine())
//     arr.push(num)
// }
// for(j=0; j<arr.length; j++){
//     sum=sum+arr[j];
// } 
// let final=sum/arr.length;
// if(final>100){
//     console.log("Excellent!")
// }else{
//     console.log("Not Excellent!")
// }
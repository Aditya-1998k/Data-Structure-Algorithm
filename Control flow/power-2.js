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
 let p=num;
 for(let i=0; i<num; i++){
     p=num%(2**i);
     if(p===0){
         break;
     }else{
        continue;
     }
 }
 if(p===0){
     console.log("Yes")
 }else if(p!=0){
 console.log("No")
 }
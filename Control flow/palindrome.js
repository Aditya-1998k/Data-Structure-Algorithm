let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//using readLine() function to take input fromt he user
let num=parseInt(readLine());
let m=0;
let q=num;
while(m<num){
    let r=q%10;
    q=parseInt(q/10);
    m=m*10+r;
    
}
if(m===num){
    console.log("True")
}else if(m!=num){
    console.log("False")
}

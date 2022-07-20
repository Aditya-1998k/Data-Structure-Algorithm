let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let num=parseInt(readLine());
for(let i=0; i<=num; i++){
    let p=num/(2**i);
    if(p%2===0){
        continue
    }else if(p===1){
        console.log("it is  power of 2")
        break
    }else if(p%2!=0){
        console.log("it is not power of 2")
        break
    }
}
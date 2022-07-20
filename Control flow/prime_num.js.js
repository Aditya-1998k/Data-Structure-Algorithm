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
for(let i=1; i<=n; i++){
    let num=parseInt(readLine());
    if(num>2){
    for(let j=2; j<num; j++){
        let result=num%j;
        if(result===0){
            console.log("No")
            break;
        }else if(result!=0){
            console.log("Yes")
            break
        }
        else{
            continue
        }
    }
    }
    else if(num===2){
        console.log("Yes")
    }
    else {
        console.log("invalid input")
    }
}

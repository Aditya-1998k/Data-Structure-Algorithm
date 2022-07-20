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
let Arm=0;
let p=num;
if(num>=100 &&num<=999){
    while(p!=0){
        let m=p%10;
        Arm=Arm+m**3;
        p=parseInt(p/10);
    }
    if(num===Arm){
        console.log("Yes");
    }else{
        console.log("No")
    }
}
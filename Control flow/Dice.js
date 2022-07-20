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
let top=parseInt(readLine());
if(top===1){
    console.log(parseInt("6"));
} else if(top===6){
    console.log(parseInt("1"));
}else if(top===5){
    console.log(parseInt("2"))
}else if(top===2){
    console.log(parseInt("5"));
}else if(top===3){
    console.log(parseInt("4"))
}else if(top===4){
    console.log(parseInt("3"));
} else{
    console.log("invalid input")
}

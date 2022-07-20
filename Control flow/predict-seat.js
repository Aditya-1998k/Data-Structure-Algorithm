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
for(let i=1; i<=num; i++){
    let arr=readLine().split(" ");
    let c=parseInt(arr[0]);
    let b=parseInt(arr[1]);
    
    if(c>=b){
        let rem=b%8;
        if(rem===0){
            console.log("SU");
        }else if(rem===1){  //here you can put rem===4
            console.log("L")
        }else if(rem===2){  //here you can put rem===5
            console.log("M")
        }else if(rem===3){   //here you can put rem===6
            console.log("U")
        }else if(rem===4){
            console.log("L")
        }else if(rem===5){
            console.log("M")
        }else if(rem===6){
            console.log("U")
        }else if(rem===7){
            console.log("SL")
        }
    }else{
        console.log("Invalid")
    }
}
// to make your program shorter and abover you can see
//what you can do
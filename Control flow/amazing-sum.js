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

let n=parseInt(readLine()); //taking input for no of iteration
let p=parseInt(readLine()); //taking first input 
let isAmazing=false   //using boolean
for(i=1; i<=n; i++){  //iterating up to n
    let q=parseInt(readLine()); // taking second input
    let sum=p+q;   //adding both input
    if(sum>100){   //checking if sum>0 if yes then enter if body if not go else body
        isAmazing=true // if sum>0 then change isAmazing =true
        break;  //exit the loop
    }else{  //if sum<100 then into else body
        p=q;  //assign q to p so that we can use it in the next iteration
        continue; //continue with the next iterationn
    }
}
if(isAmazing===true){ //if true the print True
    console.log("True")
}else{ //if false then print false
    console.log("False")
}


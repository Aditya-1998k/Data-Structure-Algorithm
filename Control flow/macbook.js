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
let sum=0;   //initiazing the sum with zero
for(let i=1; i<=n; i++){    //itirating upto n by using classic for looop
    let lifespan=parseInt(readLine());  //taking input
    if(lifespan>0){     //input is greater than zero then add it to sum if not go to else
        sum=sum+lifespan;
    }else{
        continue //continue with the next iteration
    }
}
console.log(sum);
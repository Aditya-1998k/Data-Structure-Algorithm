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
for(let k=0; k<num; k++){
    let n=parseInt(readLine())
    let girls=readLine().split(" ");
    let boys=readLine().split(" ");
    let girl_sorted=girls.sort((a,b)=>{return a-b})
    let boy_sorted=boys.sort((a,b)=>{return b-a})
    let count=0;
    for(let i=0; i<n; i++){
        if(parseInt(girl_sorted[i])%parseInt(boy_sorted[i])==0 || parseInt(boy_sorted[i])%parseInt(girl_sorted[i])==0 ){
            count++
        }
    }
    console.log(count)
}
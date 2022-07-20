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
let n=parseInt(readLine())
let prevRow=[1]
for(let row=2; row<=n; row++){
    current_row=[]
    for(let coloum=0; coloum<row; coloum++){
        if(coloum==0){
            current_row.push(1)
        }else if(coloum===row-1){
            current_row.push(1)
        }else{
            current_row.push(prevRow[coloum-1]+prevRow[coloum])
        }
    }
    prevRow=current_row
}
for(let element of prevRow){
    console.log(element)
}
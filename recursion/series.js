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
function series(i){

    if(i<=9){
        return i;
    }
    else if(i>9  && i%2==0){
        return series(i-10)
    }else{
        return series(i-9)
    }
}
let n=parseInt(readLine())
for(let i=0; i<n; i++)
{
    let m=parseInt(readLine())
    console.log(series(m))
}
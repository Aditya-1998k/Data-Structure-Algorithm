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
function reverse(str,str2,p){
    if(p==0){
        str2=str2+str[0]
        return str2;
    }else{
        str2=str2+str[p]
        p=p-1
        return reverse(str,str2,p)
    }
    
}
let n=parseInt(readLine())
for(let i=0; i<n; i++){
    let str=readLine().split('')
    let str2=''
    let p=str.length-1
    console.log(reverse(str,str2,p))
}
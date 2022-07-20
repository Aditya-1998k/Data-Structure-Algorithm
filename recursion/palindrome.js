const { count } = require("console");
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

function palindrome(m){
    if(m==1){
        rev.push(str[0])
    }else{
        m=m-1;
        rev.push(str[m])
        palindrome(m)
    }
}
let n=parseInt(readLine())
let str=[]
let rev=[]
for(let i=0; i<n; i++){
    str=readLine().split('')
    let m=str.length;
    palindrome(m)
    // console.log(rev)
    // console.log(str)
    
    let a=String(rev.join(''))
    let b=String(str.join(''))
    if(a===b){
        console.log("true")
    }else{
        console.log("False")
    }
    rev=[]
}
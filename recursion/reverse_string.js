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
let n=parseInt(readLine());
for(let i=0; i<n; i++){
    let str=readLine();
    console.log(recusiveString(str))
}

function recusiveString(str){
    //base case==if lenght of string ==1 then return str
    if(str.length===1){
        return str;
    }
    //normal case recursive call
    let len=str.length;
    let strExceptLastChar=str.substring(0,len-1)
    return str[len-1]+recusiveString(strExceptLastChar)

}
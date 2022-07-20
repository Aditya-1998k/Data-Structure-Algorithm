let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function getAllBalancedParan(n){
    let ans=[]
    solution(n,n,"");
    function solution(opening, closing, str){
        if(opening===0 && closing===0){
            ans.push(str);
            return;
        }
        if(closing<opening){
            return
        }
        if(opening!=0){
            solution(opening-1,closing,str+"(")
        }
        if(closing!=0){
            solution(opening,closing-1,str+")")
        }
    }
    return ans
}

// Do not edit anything below
let n = parseInt(readLine());
let allBalancedParan = getAllBalancedParan(n);
allBalancedParan.sort();
for(expr of allBalancedParan){
    console.log(expr);
}
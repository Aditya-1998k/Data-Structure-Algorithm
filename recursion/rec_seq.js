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
function sequence(n){
    if(n==1){
        return 1
    }
    else{
        let lastTerm=(n*(n+1))/2
        let ans=1;
        for(let i=1; i<=n; i++){
            ans=ans*lastTerm ;
            lastTerm=lastTerm-1;
        }
        return sequence(n-1)+ans;  l
    }
}
let n=parseInt(readLine())
for(let i=0; i<n; i++){
    let val=parseInt(readLine())
    console.log(sequence(val))
}

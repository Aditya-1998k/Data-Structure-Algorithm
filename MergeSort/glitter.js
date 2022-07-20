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
let price=readLine().split(" ");
let quality=readLine().split(" ");
let name="Lucy";
//iterate over the arr and check accordingly
for(let i=0; i<num-1; i++){
    if(parseInt(price[i])>=parseInt(price[i+1]) && parseInt(quality[i])>=parseInt(quality[i+1])){
        continue;
    }else if(parseInt(price[i])<parseInt(price[i+1]) && parseInt(quality[i])<parseInt(quality[i+1])){
        continue;
    }else if(parseInt(price[i])>=parseInt(price[i+1]) && parseInt(quality[i])<parseInt(quality[i+1])){
        name="Mark"
        break;
    }else if(parseInt(price[i])<=parseInt(price[i+1]) && parseInt(quality[i])>parseInt(quality[i+1])){
        name="Mark"
        break;
    }
}
console.log(name)
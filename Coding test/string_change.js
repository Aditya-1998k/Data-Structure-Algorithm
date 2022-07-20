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
let str1=readLine();
let str2=readLine();
let map1=new Map();
let map2=new Map();
if(str1.length!=str2.length){
    console.log(0);
}else{
    for(let i=0; i<str1.length; i++){
        if(map1.has(str1[i])){
            map1.set(str1[i],map1.get(str1[i])+1)
        }
        else{
            map1.set(str1[i],1)
        }
    }
    for(let i=0; i<str2.length; i++){
        if(map2.has(str2[i])){
            map2.set(str2[i],map2.get(str2[i])+1)
        }
        else{
            map2.set(str2[i],1)
        }
    }
    let temp=1
    for(let i=0; i<str2.length; i++){
        if(map2.get(str2[i])!=map1.get(str2[i])){
                temp=0;
                break;
        }
    }
    if(temp===0){
        console.log(0)
    }else{
        console.log(1)
    }
}

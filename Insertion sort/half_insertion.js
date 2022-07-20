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
let str=readLine().split("");
if(str.length%2===0){
    let str1=str.slice(str.length/2)
    let str2=str.slice(0,str.length/2)
    for(let i=0; i<str1.length; i++){
        let temp=str1[i];
        let j=i-1;
        while(j>=0 && str1[j]>temp){
            str1[j+1]=str1[j]
            j--
        }
        str1[j+1]=temp;
    }
    console.log(str2.join("")+str1.join(""))
}
if(str.length%2!=0){
    let str1=str.slice(parseInt(str.length/2))
    let str2=str.slice(0,parseInt(str.length/2)-1)
    for(let i=0; i<str1.length; i++){
        let temp=str1[i];
        let j=i-1;
        while(j>=0 && str1[j]>temp){
            str1[j+1]=str1[j]
            j--
        }
        str1[j+1]=temp;
    }
    console.log(str2.join("")+str1.join(""))
}

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
let code_word=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
let alphabet="abcdefghijklmnopqrstuvwxyz"
let alphabet_arr=alphabet.split('')
let myMap=new Map();
for(let i=0; i<code_word.length; i++){
    myMap.set(alphabet_arr[i],code_word[i])
}

let num=parseInt(readLine());
for(let i=0; i<num; i++){
    let myMap2=new Map();
    let arr=readLine().split(" ")
    console.log(coding(arr,myMap2,myMap))
}
function coding(arr,myMap2,myMap){
        for(let i=0; i<arr.length; i++){
            console.log(arr[i])
            let str=arr[i].split('')
            let str2=""
           
           // console.log(str)
            for(let j=0; j<str.length; j++){
                str2=str2+myMap.get(str[j])
                //console.log(str[j],myMap.get(str[j]))
            }
            if(str2==''){
                continue;
            }
            if(myMap2.has(str2)==false){
                myMap2.set(str2)
            }else{
                continue
            }
            console.log(str2)
        }
        return myMap2;
}

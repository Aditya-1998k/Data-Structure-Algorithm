let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let s=readLine().split(" ");
let last_word=s[s.length-1];
let arr=last_word.split('')
console.log(arr)
//let count=0;
//for(let i=0; i<arr.length;i++){
  //  count++
//}
//console.log(count)
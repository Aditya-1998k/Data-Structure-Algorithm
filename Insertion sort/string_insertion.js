let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function stringInsertionSort(str){
    let strArr=str.split("")
  for(let i=0; i<str.length; i++){
      let temp=strArr[i]
      j=i-1;
      while(j>=0 && strArr[j]>temp){
          strArr[j+1]=strArr[j];
          j--
      }
      strArr[j+1]=temp;
  }
  return strArr.join("")
}


//DO NOT CHANGE ANYTHING BELOW THIS LINE

let input_string = readLine()
console.log(stringInsertionSort(input_string))
const { AssertionError } = require("assert");
let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer

function differenceOfSumOfEvenOddIndexnumbers(num){
    let sum1=0;
    let sum2=0;
    if(num.length===1){
        return num[0];
    }
    if(num.length>1){
    for(let i=0; i<num.length;i++){
        
        if(i%2===0){
            sum1=sum1+num[i]
        }else{
            sum2=sum2+num[i]
        }
    }
    return sum1-sum2
}
}



// Do not change anything below this line

function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}


let numbers =readLine().split(" ");
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));
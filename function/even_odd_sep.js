let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
//Write a function with name evenOddSeparator
// This evenOddSeparator function should take a list of integers and return a list
// you can start from here	
function evenOddSeparator(num){
  let arr1=[];
  let arr2=[];
  //if(num.length%2!=0){
  for(let i=num.length-1; i>=0; i--){
     if(num[i]%2!=0){
      arr1.unshift(num[i])
     
    }else if(num[i]%2===0){
      arr2.unshift(num[i])
    }
  }
  for(let i=0; i<arr2.length; i++){
    arr1.push(arr2[i])
  }
  return arr1;
}
/*else if(num.length%2===0){
  for(let i=num.length-1; i>=0; i--){
    if(num[i]%2!=0){
     arr1.unshift(num[i])
    
   }else if(num[i]%2===0){
     arr2.unshift(num[i])
   }
 }
 for(let i=0; i<arr2.length; i++){
   arr1.push(arr2[i])
 }
 return arr1
}
}



/// Do not change anything below this line
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}



let numbers =readLine().split(" ");
ConvertToNumber(numbers);
let separated = evenOddSeparator(numbers);
for(num of separated){
  console.log(num);
}*/
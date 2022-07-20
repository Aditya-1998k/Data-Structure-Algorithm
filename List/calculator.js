// //mock interview
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// function calculator(num1, num2, operator){
   
//    if(operator=="sum"){
//        return(num1+num2)
//    }
//    if(operator=="multiply"){
//        return num1*num2
//    }
//    if(operator=="substraction"){
//        return num1-num2
//    }
//    if(operator=="division"){
//        return num1/num2;
//    }
// }
// let p=parseInt(readLine());
// let q=parseInt(readLine());
// let operator=readLine();
// console.log(calculator(p,q,operator))
let str="aditya"
let arr=str.split("")
let reverseStr=[]
for(let i=arr.length; i>0; i--){
    reverseStr.push(arr[i])

}
console.log(reverseStr)
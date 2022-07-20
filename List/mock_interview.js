// var x=3;
// var y="3"
// var z=x-y;  //here explicit type conversion happen and y converted to integer
// console.log(z)
// console.log(x+y) //here string additon will happen


// let employee={name:"aditya",age:"20",emial:"gmail.com"}
// console.log(employee.name)


// let arr_numbers=[1,2,3,4,5]
// // console.log(arr_numbers[1])  //print 2
// // //console.log(arr_numbers[10]) //undefined
// // arr_numbers.pop()
// // arr_numbers.shift()
// // console.log(arr_numbers)
// let sum=0;
// for(let i=0; i<arr_numbers.length; i++){
// sum=sum+arr_numbers[i]
// }
// console.log(sum)


// /////
// //mock interview
// // let fs = require("fs");
// // let data = fs.readFileSync(0, 'utf-8');
// // let idx = 0;
// // data = data.split('\n');

// // function readLine() {
// //   idx++;
// //   return data[idx - 1];
// // }

// // function calculator(num1, num2, operator){
   
// //    if(operator=="+"){
// //        return(num1+num2)
// //    }
// //    if(operator=="*"){
// //        return num1*num2
// //    }
// //    if(operator=="-"){
// //        return num1-num2
// //    }
// //    if(operator=="/"){
// //        return num1/num2;
// //    }
// // }
// // let p=parseInt(readLine())
// // let q=parseInt(readLine())
// // let operator=readLine()
// // console.log(calculator(p,q,operator))



// var x=0  //in javascriipt zero is treated as false so only 10 will print and x will not be print
// var z=10
// if(x){
// console.log(x)
// }
// if(z){
// console.log(z)}

// // {
// //     let m=10
// // }
// // console.log(m)



// // for(let i=0;i<10; i++){//here scope of variable i is limited so output is eroor

// // }
// // console.log(i)

// let nums=[1,2 ,3,4,5,6,8,10,12]
// let odd=[]
// let even=[]
// for(let i=0; i<nums.length;i++){
//     if(nums[i]%2===0){
//         even.push(nums[i])
//     }else{
//         odd.push(nums[i])
//     }
// }
// console.log(odd)
// console.log(even)
// //
// let str="aditya"
// let arr=str.split('')
// let reverseStr=[]
// for(let i=arr.length-1; i>=0; i--){
//     reverseStr.push(arr[i])

// }
// console.log(reverseStr)
// //
// // let i=0         //we can initialixe inside array
// // for(;i<10;i++){
// //     console.log(i)
// // }

// //
// let i=0;
// for(;;){                      //print infinite loop 
//     console.log(i)
// }

// for(let i=1; i<=100;i++){
//     if(i%3===0 && i%5===0){
//             console.log("Fizz Buzz")
//     }else if(i%3===0){
//         console.log("fizz")
//     }else if(i%5===0){
//         console.log("buzz")
//     }else{
//         console.log(i)
//     }
// }

let nums=[1,1,2,3,4,5,6,7,7,8,4]
// let unique=[]
// for(let i=0; i<nums.length;i++){
//     if(i>0 && i<nums.length){
//     if(nums.indexOf(nums[i], i+1)===-1 && nums.lastIndexOf(nums[i],i-1)===-1){
//         unique.push(nums[i])
//     }}
//     else if(nums[0]){
//         if(nums.indexOf(nums[i], i+1)===-1 ){
//             unique.push(nums[0])
//            }
//     }
//     else if(nums[nums.length-1]){
//         if(nums.lastIndexOf(nums[i],i-1)===-1){
//             unique.push(nums[nums.length-1])
//         }}
// }
// console.log(unique)
let unique=new Set(nums)
console.log(unique)


//null and undefined
//declared but not assigned any vlaue then undefined

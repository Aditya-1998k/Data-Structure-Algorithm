// let arr=[1,2,5,10,20,50,100,500,1000]
// let target=64;
// let count=0;
// while (target!=0){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<=target  && i===arr.length-1){
//             var m=i+1;
//             i=arr.length-1;
//         }else if(arr[i]>target){
//             var m=i;
//             i=arr.length-1;
//         }
//     }
//     target=target-arr[m-1];
//     count++
// }
// console.log(count)

let arr = [1,2,5,10,20,50,100,500]
let n = 83
let ans = 0
for (let i = arr.length - 1; i >= 0; i--) {
   let count = parseInt(n/arr[i])
   ans = ans + count
   n = n - arr[i] * count
}
console.log(ans)
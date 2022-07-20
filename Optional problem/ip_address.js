var defangIPaddr = function(address) {

let arr=address.split(/[.]/)
let arr2=[];
for(let i=0; i<=6; i++){
  if(i===0){
    arr2[0]=arr[0];
  }else if(i===1)
  {
    arr2[1]="[.]";
  }else if(i===2)
  {
    arr2[2]=arr[1];
  }else if(i===3){
    arr2[3]="[.]"
  }else if(i===4){
    arr2[4]=arr[2];
  }else if(i===5){
    arr2[5]="[.]"
  }else if(i===6){
    arr2[6]=arr[3]
  }
}
return arr2.join('')
}
console.log(defangIPaddr("1.1.1.1"))

// let arr=readLine()
// let amr=arr.split(/[.]/)
// console.log(amr)
// console.log(arr)

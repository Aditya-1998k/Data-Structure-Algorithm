// //hash map practice
// //hash map or hash is another type of data structure
// // like array 
// //a key value store that provide search in the liner time complexity
// // search--->O(1)
// //Insert--->O(1)
// //Delete--->O(1)

// // for creating map
//     let mymap=new Map();
// // let mymap2=new Map([["key",1],["key2",2]])
// // console.log(mymap2)

// //adding element to the map
// mymap.set("key3",3)
// console.log(mymap)

// //entries in map are ordered by insertion order and this order is guarnteed
// //iteration over map
// // for(let key of mymap.keys()){
// //     console.log(key)
// // }
// // for(let val of mymap.values()){
// //     console.log(val)
// // }
// // for(let [k,v] of mymap){
// //     console.log(k,v)
// // }

// //fetching the value of map
// let val=mymap.get("key3")
// console.log(val)

// //using for each in map it takes callback function with two parameter one is key and other is value
// mymap.forEach((k,v)=>{
//     console.log(k,v)
// })

// //deleting element from the map
// let res=mymap.delete("key3")
// console.log(res) //if false then that key is not present else true


// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let recurr=parseInt(readLine());
// let arr=[]
// for(let k=0; k<recurr; k++){
//     let swap=readLine().split(" ");
//     arr.push(swap[0]);
//     arr.push(swap[1]);
// }
// let str=readLine();
// let mymap=new Map();
// for(let i=0; i<str.length; i++){
//     mymap.set(str[i], i)
// }
// // console.log(mymap);
// // console.log(arr)
// let str_arr=str.split('');
// for(let i=0; i<arr.length; i++){
//     let swaper1=mymap.get(arr[i]);
    
//     let swaper2=mymap.get(arr[i+1]);
//     //console.log(swaper2)
//     let temp=str_arr[swaper1];
//     str_arr[swaper1]=str_arr[swaper2];
//     str_arr[swaper2]=temp;
//     i=i+1;
// }

// console.log(str_arr.join(''))

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
let t=parseInt(readLine());
let str=readLine();
let mymap=new Map();
for(let i=0; i<str.length; i++){
    if(mymap.has(str[i])){
        mymap.set(str[i],mymap.get(str[i])+1)
    }else{
        mymap.set(str[i],1)
    }
}
for(let i=1; i<t; i++){
    let tempmap=new Map();
    let str1=readLine();
    console.log(str1)
    for(let j=0; j<str1.length; j++){
        if(mymap.has(str[j])){
           if(tempmap.has(str[j])){
                if(tempmap.get(str[j])<mymap.get(str[j])){
                    tempmap.set(str[j],tempmap.get(str[j])+1)
                }
            }else{
                tempmap.set(str[j],1)
            }
        }
    }
    console.log(tempmap)
    mymap=tempmap;
}
console.log(mymap)



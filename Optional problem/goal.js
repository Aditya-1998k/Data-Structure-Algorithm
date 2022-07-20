let p="GGG"
let arr=p.split(/[()]/)
let result=""
for(let i=0; i<arr.length; i++){
    if(arr[i]=='G'){
        result=result+arr[i]
    }
    if(arr[i]=='al'){
        result=result+arr[i]
    }
    if(arr[i]=='' && arr[i+1]==''){
        result=result+'o'
        i=i+1
    }
}
console.log(result)
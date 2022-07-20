let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let num=parseInt(readLine());
let image=[];
for(let i=0; i<num; i++){
    image.push(parseInt(readLine()))
}
let m=parseInt(readLine())
let icon=[]
for(let i=0; i<m; i++){
    icon.push(parseInt(readLine()))
}
// console.log(icon)
// console.log(image)

if(icon.length===0  || image.length===0){
    console.log(0)
}
else if(icon.length===1){
    let count=0;

    for(let i=0; i<image.length; i++){
        if(icon[0]===image[i]){
            count++
        }
        
    }
    console.log(count)
}

else if(icon.length===2){
    for(let i=0; i<num; i++){
        if(image[i]==icon[0] && image[i+1]==icon[1] && i+1<num){
            count++
        }
    }
}
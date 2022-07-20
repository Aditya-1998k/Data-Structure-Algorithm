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
let num=parseInt(readLine());
//sort the array
//check highest with other two lower than that is forming triangle or not
//if yes print the perimeter
//other wise shift 1 index down
for(let i=0; i<num; i++){
    let arr=readLine().split(" ");
    let sorted=arr.sort((a,b)=>{
        return a-b;
    })

   // console.log(sorted);
   perimeter(sorted)
    function perimeter(sorted){
        let k=sorted.length-1;
        if(parseInt(sorted[k])<(parseInt(sorted[k-1])+parseInt(sorted[k-2]))){
            let sum=(parseInt(sorted[k])+parseInt(sorted[k-1])+parseInt(sorted[k-2]));
            console.log(sum)
            return
        }else{
            sorted.pop();
            if(sorted.length<3){
                console.log(0)
                return;
            }
            //console.log(sorted)
            perimeter(sorted)
        }

    }
}
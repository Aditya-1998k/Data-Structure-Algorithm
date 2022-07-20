let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
let arr1=readLine().split(':',2)
let arr2=readLine().split(':',2)
let hh1=parseInt(arr1[0])
let mm1=parseInt(arr1[1])
let hh2=parseInt(arr2[0])
let mm2=parseInt(arr2[1])
if(hh2>hh1){
    if(mm2>=mm1){
        let result=(mm2-mm1)+(hh2-hh1)*60
        console.log(result)
    }
}



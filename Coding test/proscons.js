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
let str=readLine();
let mymap=new Map();
for(let i=0; i<str.length; i++){
	if(mymap.has(str[i])){
		mymap.set(str[i],mymap.get(str[i])+1);
	}else{
		mymap.set(str[i],1)
	}
}
let longest=0;
let arr=readLine().split(" ");
for(let i=0; i<arr.length; i++){
	let checker=arr[i];
	let check=false;
	for(let j=0; j<checker.length; j++){
		if(!mymap.has(checker[j])){
			check=true
		}
	}	
	if(check==false){
		let len=checker.length;
    //console.log(len)
		longest=Math.max(len, longest)
	}
  
}
console.log(longest)

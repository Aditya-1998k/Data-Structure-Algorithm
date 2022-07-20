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
//taking input
let arr=readLine().split(" ")
let n=parseInt(arr[0]);
let k=parseInt(arr[1]);

//first condtion for when both are equal or no of cracker is zero
//n=no of crackers    k is no user
if(n===k || n===0){
    console.log(parseInt("0"));
}
//2nd condition when no crackers is greater than no of person
if(n>k)
{
	//if n is divided equally between k then max-min is zero
	if(n%k===0){
    console.log(parseInt("0"))
	}
	//if n is not dividen equally then diff is 1 
	else if((n%k)!=0){
    console.log(parseInt(1))
	}
}
//if n is less than k and n is not zero then diff is always 1 because some got 1 and some 0
else if(n<k && n!=0){
    console.log(parseInt("1"))
}
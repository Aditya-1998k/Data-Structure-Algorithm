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
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){


let hh1=parseInt(upTime[0])
let mm1=parseInt(upTime[1])
let hh2=parseInt(downTime[0])
let mm2=parseInt(downTime[1])

if(hh2>=hh1 && hh2<24){
    if(mm2>=mm1){
        let result=(mm2-mm1)+(hh2-hh1)*60
        return result
    }else if(mm2<mm1){
        let result=(mm2-mm1+60)+(hh2-hh1-1)*60;
        return result;
    }
}	
else if(hh2<hh1){
	if(mm2>=mm1){
        let result=(mm2-mm1)+(24-hh1+hh2)*60
        return result
    }else if(mm2<mm1){
        let result=(mm1-mm2)+(23-hh1+hh2)*60;
        return result;
    }
}	
}
}


// -------- Do NOT edit anything below this line ----------
let upTime=readLine().split(':')
let downTime=readLine().split(':')
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());
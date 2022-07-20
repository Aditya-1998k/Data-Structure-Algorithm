let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
var pi=3.14;
class Circle{
    constructor(r){
        if(r<0){
            var r=0;
        }
        this.r=r;
        
    }
    getArea(){
        return Math.ceil(pi*this.r*this.r);
    }
    getCircumference(){
        return Math.ceil(2*pi*this.r);
    }
    
}



let oneCircle = new Circle(parseFloat(readLine()));
console.log(parseFloat(oneCircle.getArea()));
console.log(parseFloat(oneCircle.getCircumference()));

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
// Do not edit above this line
// Code Here
class coordinate{
          constructor(x,y){
            this.x=parseInt(x);
            this.y=parseInt(y);
          
          this.getX=function(){
            return this.x;
          }
          this.getY=function(){
            return this.y;
          }
          this.setX=function(x){
            x=this.x
          }
          this.setY=function(y){
            y=this.y;
          }
        }
}

class Point extends coordinate{
  constructor(x,y){
    super(x,y)
  }
  distanceXY(){
    return Math.sqrt(this.x**2+this.y**2)
  }
  distancePoint(){
    let x1=first.getX()
    let x2=second.getX()
    let y1=first.getY()
    let y2=second.getY()
    return Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
  }
}

// Do not edit below this line 
let inp1 = readLine().split(" ");
let inp2 = readLine().split(" ");
let [x1, y1] = [parseInt(inp1[0]), parseInt(inp1[1])];
let [x2, y2] = [parseInt(inp2[0]), parseInt(inp2[1])];

let first = new Point(x1, y1);
let second = new Point(x2, y2);

// Output x coordinate of first point
console.log(first.getX());

// Output Y coordinate of first point
console.log(second.getY());

// Output Distance of first point from origin fixed to 2 decimal places
console.log(first.distanceXY(0, 0).toFixed(2));

// Output Distance of first point from second point fixed to 2 decimal places
console.log(first.distancePoint(second).toFixed(2));
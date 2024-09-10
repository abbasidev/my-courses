//// Constructor Functions & instanceof Operator

function Car(color, maxSpeed) {
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.move = () => console.log("The car is moving");
  this.stop = () => console.log("The car was stopped");
}

let car1 = new Car("black", 200);
let car2 = new Car("blue", 180);

console.log(car1);
console.log(car2);

console.log(typeof car1);

console.log(car1 instanceof Car);
console.log(car1 instanceof Object);
console.log(car1 instanceof Array);

let set1 = new Set();
console.log(set1 instanceof Set);
console.log(set1 instanceof Car);

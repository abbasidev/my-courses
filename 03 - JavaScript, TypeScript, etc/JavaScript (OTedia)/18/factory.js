//// Factory Functions

function createCar(color, maxSpeed) {
  return {
    //// ES5
    // color: color,
    // maxSpeed: maxSpeed,

    //// ES6
    color,
    maxSpeed,
    move() {
      console.log("The car is moving");
    },
    stop() {
      console.log("The car was stopped");
    },
  };
}

let car1 = createCar("Blue", 200);
console.log(car1);

let car2 = createCar("Red", 250);
console.log(car2);

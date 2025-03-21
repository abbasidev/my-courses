/////////////////////////////////////////////
// Liskov Substitution Principle (LSP)
/////////////////////////////////////////////

/////////////////////////////////////////////
//// Before

// class Bird {
//   eat() {
//     console.log("This bird can eat!");
//   }
//   fly() {
//     console.log("This bird can fly!");
//   }
// }

// class Duck extends Bird {
//   fly() {
//     console.log("Duck flying!");
//   }
// }

// class Eagle extends Bird {
//   fly() {
//     console.log("Eagle flying!");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguins cannot fly!");
//   }
// }

// function makeBirdFly(bird) {
//   bird.fly();
// }

// const duck = new Duck();
// const eagle = new Eagle();
// const penguin = new Penguin();

// makeBirdFly(duck); // Works fine
// makeBirdFly(eagle);
// makeBirdFly(penguin);

/////////////////////////////////////////////
//// After applying LSP

// class Bird {
//   eat() {
//     console.log("This bird can eat!");
//   }
// }

// class FlyingBird extends Bird {
//   fly() {
//     console.log("THIS BIRD IS FLYING!");
//   }
// }

// class Duck extends FlyingBird {
//   fly() {
//     console.log("Duck flying!");
//   }
// }

// class Eagle extends FlyingBird {
//   fly() {
//     console.log("Eagle flying!");
//   }
// }

// class Penguin extends Bird {}

// function makeBirdFly(bird) {
//   if (bird instanceof FlyingBird) {
//     bird.fly();
//   } else {
//     console.log("this bird CANNOT fly :(");
//   }
// }

// const duck = new Duck();
// const eagle = new Eagle();
// const penguin = new Penguin();

// makeBirdFly(duck); // Works fine
// makeBirdFly(eagle);
// makeBirdFly(penguin);

/////////////////////////////////////////////

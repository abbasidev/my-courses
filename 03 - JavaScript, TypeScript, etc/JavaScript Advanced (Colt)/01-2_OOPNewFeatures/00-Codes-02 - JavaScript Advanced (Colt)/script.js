/////////////////////////////////////////////

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(newName) {
//     const [first, last] = newName.split(" ");
//     this.firstName = first;
//     this.lastName = last;
//   }
// }

// const amir = new User("Amir", "Abbasi");

// //// Getter
// console.log(amir.firstName);
// console.log(amir.lastName);
// console.log(amir.fullName);

// //// Setter
// amir.fullName = "Ali Qoli";
// console.log(amir.firstName);
// console.log(amir.lastName);
// console.log(amir.fullName);

/////////////////////////////////////////////

// class Cat {
//   static numOfCats = 0;
//   name;
//   breed;
//   numLegs = 4;
//   hasTail = true;

//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//     Cat.numOfCats += 1;
//   }

//   amputate() {
//     this.numLegs -= 1;
//   }
// }

// const blue = new Cat("Blue", "American");

// console.log(blue.name);
// console.log(blue.breed);
// console.log(blue.numOfCats); // undefined
// console.log(blue.numLegs);

/////////////////////////////////////////////

// class Circle {
//   #radius;
//   constructor(radius) {
//     this.#radius = radius;
//   }
//   getRadius() {
//     return this.#radius;
//   }
// }

// const myCircle = new Circle(10);
// // console.log(myCircle.#radius); // Error

/////////////////////////////////////////////

// class MyClass {
//   #privateMethod() {
//     console.log("PRIVATE METHOD CALLED!!!");
//   }

//   publicMethod() {
//     this.#privateMethod();
//   }
// }

// const myClass = new MyClass();
// myClass.publicMethod();
// // myClass.#privateMethod(); // Error

/////////////////////////////////////////////

// class Circle {
//   #radius;
//   constructor(radius) {
//     this.#radius = radius;
//   }
//   get radius() {
//     return this.#radius;
//   }

//   set radius(newVal) {
//     if (newVal < 0) {
//       throw new Error("Radius cannot be negative!");
//     }
//     this.#radius = newVal;
//   }
// }

// const myCircle = new Circle(10);
// myCircle.radius = -99;
// console.log(myCircle.radius);

/////////////////////////////////////////////

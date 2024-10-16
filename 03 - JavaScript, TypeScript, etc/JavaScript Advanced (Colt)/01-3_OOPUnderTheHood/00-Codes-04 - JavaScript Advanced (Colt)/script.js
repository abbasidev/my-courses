/////////////////////////////////////////////

// // Dog is constructor function
// // constructor function is old way for prototype or ES6 Classes

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// // not work
// const dog0 = Dog("Dog 0", "Iranian");
// console.log(dog0);

// // work
// const dog1 = new Dog("Dog 1", "American");
// console.log(dog1);

/////////////////////////////////////////////

// // Dog is constructor function
// // constructor function is old way for prototype or ES6 Classes

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;

//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };

//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }

// const dog1 = new Dog("Dog 1", "American");
// console.log(dog1);

// const dog2 = new Dog("Dog 2", "German");
// console.log(dog2);

// console.log(dog1.__proto__);
// console.log(dog1.bark());
// console.log(dog2.bark());
// console.log(dog1.bark === dog2.bark);

// console.log(dog2.__proto__);
// console.log(dog1.sleep());
// console.log(dog2.sleep());
// console.log(dog1.sleep === dog2.sleep);

/////////////////////////////////////////////

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   bark() {
//     return `${this.name} says woof!`;
//   }

//   sleep() {
//     return `${this.name} is sleeping!`;
//   }
// }

// const dog1 = new Dog("Dog 1", "American");
// console.log(dog1);

// const dog2 = new Dog("Dog 2", "German");
// console.log(dog2);

// console.log(dog1.__proto__);
// console.log(dog1.__proto__.__proto__);
// console.log(dog1.bark());
// console.log(dog2.bark());
// console.log(dog1.bark === dog2.bark);

// console.log(dog2.__proto__);
// console.log(dog2.__proto__.__proto__);
// console.log(dog1.sleep());
// console.log(dog2.sleep());
// console.log(dog1.sleep === dog2.sleep);

// console.log(dog1.__proto__ === dog2.__proto__);

/////////////////////////////////////////////

// console.log(window.__proto__);
// console.log(__proto__);

// //

// const myObj = {
//   color: "purple",
//   score: 99,
//   greet() {
//     console.log("HIII!");
//   },
// };
// console.log(myObj.__proto__);

// //

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.__proto__);

/////////////////////////////////////////////

// // Dog is constructor function
// // constructor function is old way for prototype or ES6 Classes

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// Dog.prototype.bark = function () {
//   return `${this.name} says woof!`;
// };

// Dog.prototype.sleep = function () {
//   return `${this.name} is sleeping!`;
// };

// const dog1 = new Dog("Dog 1", "American");
// console.log(dog1);

// const dog2 = new Dog("Dog 2", "German");
// console.log(dog2);

// console.log(dog1.bark());
// console.log(dog2.bark());
// console.log(dog1.bark === dog2.bark);

// console.log(dog1.sleep());
// console.log(dog2.sleep());
// console.log(dog1.sleep === dog2.sleep);

/////////////////////////////////////////////

// const grandparent = {
//   greet() {
//     return "HI THERE!!!";
//   },
// };

// const parent = {
//   color: "purple",
//   sing() {
//     return "LA LA LA";
//   },
//   __proto__: grandparent,
// };

// const child = {
//   num: 2,
//   __proto__: parent,
// };

// console.log(child.num);
// console.log(child.color);
// console.log(child.sing());
// console.log(child.greet());

// console.log("child: ", child);
// console.log("child.__proto__: ", child.__proto__);
// console.log("child.__proto__.__proto__: ", child.__proto__.__proto__);

// console.log("parent: ", parent);
// console.log("parent.__proto__: ", parent.__proto__);

// console.log("grandparent: ", grandparent);

/////////////////////////////////////////////

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof!`;
//   }
//   sleep() {
//     return `${this.name} is sleeping!`;
//   }
// }

// class GuideDog extends Dog {
//   constructor(name, breed, owner) {
//     super(name, breed);
//     this.owner = owner;
//   }
//   alert() {
//     return `${this.name} alerts you to danger.  Good dog!`;
//   }
// }

// const dog1 = new GuideDog("Dog 1", "American", "Amir");
// console.log(dog1);
// console.log(dog1.alert());
// console.log(dog1.bark());
// console.log(dog1.sleep());
// console.log(dog1.__proto__);

// const dog2 = new GuideDog("Dog 2", "German", "Ali");
// console.log(dog2);
// console.log(dog2.alert());
// console.log(dog2.bark());
// console.log(dog2.sleep());
// console.log(dog2.__proto__);

/////////////////////////////////////////////

// const person = {
//   sing() {
//     return "LALALA";
//   },
//   isHuman: true,
// };

// const user1 = Object.create(person);
// console.log(user1);
// console.log(user1.sing());
// console.log(user1.isHuman);

// user1.firstName = "Amir";
// user1.lastName = "Abbasi";
// console.log(user1);

// console.log(person.isPrototypeOf(user1));
// console.log(Object.getPrototypeOf(user1));
// console.log(user1.__proto__);

// Object.setPrototypeOf(user1, { isHuman: false });
// console.log(user1);
// console.log(user1.__proto__);

/////////////////////////////////////////////

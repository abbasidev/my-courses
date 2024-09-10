/////////////////////////////////////////////

// const key = "species";
// const pet = { species: "Dog", name: "Elton", age: 1.5 };

// console.log(pet);
// console.log(pet.age);
// console.log(pet.species);

// console.log(pet["age"]);
// // console.log(pet[age]); // Error

// console.log(pet[key]);
// console.log(pet["key"]); // undefined
// console.log(pet.key); // undefined

// //

// pet[true] = "Hello!!!";

// console.log(pet[true]); // پشت صحنه به استرینگ تبدیل میشود
// console.log(pet["true"]);

// //

// pet.bark = function () {
//   return "WOOf WOOf!!!";
// };

// console.log(Object.keys(pet));
// console.log(Object.values(pet));
// console.log(Object.entries(pet));

/////////////////////////////////////////////

// function getTriangleArea(a, b) {
//   return (a * b) / 2;
// }

// function getTriangleHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// console.log(getTriangleArea(3, 4));
// console.log(getTriangleArea(5, 12));

// console.log(getTriangleHypotenuse(3, 4));
// console.log(getTriangleHypotenuse(5, 12));

/////////////////////////////////////////////

// let myTri1 = {
//   a: 3,
//   b: 4,
//   getArea: function () {
//     return (this.a * this.b) / 2;
//   },
//   getHypotenuse: function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
// };

// console.log(myTri1.a);
// console.log(myTri1.getArea());
// console.log(myTri1.getHypotenuse());

// //

// let myTri2 = {
//   a: 5,
//   b: 12,
//   getArea: function () {
//     return (this.a * this.b) / 2;
//   },
//   getHypotenuse: function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
// };

// console.log(myTri2.a);
// console.log(myTri2.getArea());
// console.log(myTri2.getHypotenuse());

/////////////////////////////////////////////

// class Triangle {
//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }
// }

// let myTri1 = new Triangle();
// myTri1.a = 3;
// myTri1.b = 4;

// console.log(myTri1.getArea());
// console.log(myTri1.getHypotenuse());
// console.log(typeof myTri1);
// console.log(myTri1 instanceof Triangle);

// //

// let myTri2 = new Triangle();
// myTri2.a = 5;
// myTri2.b = 12;

// console.log(myTri2.getArea());
// console.log(myTri2.getHypotenuse());
// console.log(typeof myTri2);
// console.log(myTri2 instanceof Triangle);

/////////////////////////////////////////////

// class Triangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }
// }

// let myTri1 = new Triangle(3, 4);

// console.log(myTri1.getArea());
// console.log(myTri1.getHypotenuse());

// //

// let myTri2 = new Triangle(true, "Amir");

// console.log(myTri2.getArea()); // NaN
// console.log(myTri2.getHypotenuse()); // NaN

/////////////////////////////////////////////

// class Triangle {
//   constructor(a, b) {
//     if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

//     if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

//     this.a = a;
//     this.b = b;
//   }
//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }
// }

// console.log(Triangle.constructor);

// //

// let myTri1 = new Triangle(3, 4);

// console.log(myTri1.getArea());
// console.log(myTri1.getHypotenuse());

// //

// let myTri2 = new Triangle(true, "Amir");

// console.log(myTri2.getArea()); // Error
// console.log(myTri2.getHypotenuse()); // Error

/////////////////////////////////////////////

// // BankAccount class
// //  - Properties
// //     - balance (defaults to 0 if not provided)
// //     - accountHolder
// //     - accountNumber
// // - Methods
// //     - deposit(amt) - increases balance by amt
// //     - withdraw(amt) - descreases balance by amt.

// class BankAccount {
//   constructor(accountNumber, accountHolder, balance = 0) {
//     this.accountHolder = accountHolder;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(amt) {
//     if (amt > 0) {
//       this.balance += amt;
//       console.log(`You deposited $${amt}.  New balance is: $${this.balance}`);
//     } else {
//       console.log("Can't deposit a negative amount");
//     }
//   }

//   withdraw(amt) {
//     if (amt > this.balance) {
//       console.log("You can't withdraw that much!");
//     } else {
//       this.balance -= amt;
//       console.log(`You withdrew $${amt}.  New balance is: $${this.balance}`);
//     }
//   }
// }

// const a = new BankAccount("123", "James Dean");

// console.log(a);
// a.deposit(200);
// a.withdraw(100);
// console.log(a.balance);

/////////////////////////////////////////////

// class Triangle {
//   constructor(a, b) {
//     if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

//     if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

//     this.a = a;
//     this.b = b;
//   }
//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }
// }

// class ShyTriangle extends Triangle {
//   describe() {
//     return "(runs and hides)";
//   }

//   beShy() {
//     return "I AM SHY!!!";
//   }
// }

// const regularTri = new Triangle(3, 4);
// console.log(regularTri);

// const shyTri = new ShyTriangle(3, 4);
// console.log(shyTri);
// console.log(shyTri.getArea());
// console.log(shyTri.getHypotenuse());
// console.log(shyTri.describe());
// console.log(shyTri.beShy());

/////////////////////////////////////////////

// class Triangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }

//   describe() {
//     return `Area is ${this.getArea()}.`;
//   }
// }

// class ColorTriangle extends Triangle {
//   constructor(a, b, color) {
//     super(a, b);
//     this.color = color;
//   }
// }

// class ColorMoodTriangle extends ColorTriangle {
//   constructor(a, b, color, mood) {
//     super(a, b, color);
//     this.mood = mood;
//   }
// }

// const tri = new ColorMoodTriangle(3, 5, "green", "sad");
// console.log(tri);
// console.log(tri.mood);
// console.log(tri.color);
// console.log(tri.a);
// console.log(tri.b);
// console.log(tri.getArea());
// console.log(tri.getHypotenuse());
// console.log(tri.describe());

/////////////////////////////////////////////

// class Cat {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   meow1() {
//     console.log("THIS IS: ", this);
//   }

//   static meow2() {
//     console.log("THIS IS: ", this);
//   }

//   species1 = "felis catus";
//   static species2 = "felis catus";
// }

// const blue = new Cat("blue", "scottish fold");

// blue.meow1();
// console.log(blue.species1);

// // blue به استاتیک متود کلاس سازنده ش دسترسی ندارد
// // blue.meow2();

// // blue به استاتیک پراپرتی کلاس سازنده ش دسترسی ندارد
// // console.log(blue.species2);

// // Cat فقط به استاتیک متود خودش دسترسی دارد
// Cat.meow2();
// // Cat فقط به استاتیک پراپرتی خودش دسترسی دارد
// console.log(Cat.species2);

/////////////////////////////////////////////

// class Cat {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   static registerStray() {
//     const names = [
//       "Muffin",
//       "Biscuit",
//       "Sleepy",
//       "Dodo",
//       "Princess Butterface",
//     ];
//     const name = choice(names);
//     return new Cat(name, "unknown");
//   }
//   meow() {
//     return `${this.name} says meow`;
//   }
// }

// function choice(arr) {
//   const randIdx = Math.floor(Math.random() * arr.length);
//   return arr[randIdx];
// }

// console.log(Cat.registerStray());

/////////////////////////////////////////////

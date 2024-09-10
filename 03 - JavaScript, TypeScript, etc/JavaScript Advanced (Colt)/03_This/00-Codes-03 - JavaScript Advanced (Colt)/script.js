/////////////////////////////////////////////

// const person = {
//   name: "Amir",
//   city: "Tehran",
//   sing: function () {
//     return `${this.name} sing LA LA LA`;
//   },
// };

// console.log(person.sing());

// const amirSing = person.sing();
// console.log(amirSing);

// const aliSing = person.sing;
// console.log(aliSing());

/////////////////////////////////////////////

// class Cat {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   dance(style = "tango") {
//     // console.log(this);
//     return `Meow, I am ${this.firstName}` + ` and I like to ${style}`;
//   }
// }

// let fluffy = new Cat("Fluffy");
// console.log(fluffy.dance());
// console.log(fluffy.dance("salsa"));

// const fDance1 = fluffy.dance();
// console.log(fDance1);

// const fDance2 = fluffy.dance;
// // console.log(fDance2()); // Error

/////////////////////////////////////////////

// function great() {
//   console.log(this);
//   return `THIS: ${this}`;
// }

// console.log(great());

/////////////////////////////////////////////

// const person = {
//   name: "Amir",
//   city: "Tehran",
//   sing: function () {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.city);
//     return `${this.name} sing LA LA LA`;
//   },
// };

// console.log(person.sing());

/////////////////////////////////////////////

// class Cat {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   dance(style = "tango") {
//     return `Meow, I am ${this.firstName}` + ` and I like to ${style}`;
//   }
// }

// let fluffy = new Cat("Fluffy");

// const fDance1 = fluffy.dance();
// console.log(fDance1);

// const fDance2 = fluffy.dance;
// // console.log(fDance2()); // Error
// console.log(fDance2.call(fluffy));
// console.log(fDance2.call(fluffy, "salsa"));

/////////////////////////////////////////////

// const amir = {
//   name: "Amir",
//   city: "Tehran",
//   sing: function () {
//     return `${this.name} sing LA LA LA`;
//   },
// };

// const ali = {
//   name: "Ali",
//   city: "Tehran",
// };

// console.log(amir.sing());

// // console.log(ali.sing()); // Error
// console.log(amir.sing.call(ali));

/////////////////////////////////////////////

// const ringo = {
//   firstName: "Ringo",
//   greet: function (greeting, punctuation) {
//     console.log(`${this.firstName} says ${greeting} ${punctuation}`);
//   },
// };

// const george = {
//   firstName: "George",
//   lastName: "Harrison",
// };

// ringo.greet("Hey there", "!!!");
// ringo.greet.call(george, "Hey there", "!!!");
// ringo.greet.apply(george, ["Hey there", "!!!"]);

// //

// const nums = [1, 5, 2, 99, 3, 5];
// console.log(nums);
// console.log(Math.max(nums));
// console.log(Math.max(...nums));

// // "null" here means it doesn't matter what "this" is
// console.log(Math.max.call(null, nums));
// console.log(Math.max.apply(null, nums));

// function maximum() {
//   console.log(arguments);
//   // "null" here means it doesn't matter what "this" is
//   return Math.max.apply(null, arguments);
// }

// console.log(maximum(1, 22, 3, 4, 57, 6));

/////////////////////////////////////////////

// const amir = {
//   name: "Amir",
//   city: "Tehran",
//   sing: function () {
//     return `${this.name} sing LA LA LA`;
//   },
// };

// const ali = {
//   name: "Ali",
//   city: "Tehran",
// };

// console.log(amir.sing());

// console.log(amir.sing.call(ali));
// console.log(amir.sing.call(ali));
// console.log(amir.sing.call(ali));

// const aliSing1 = amir.sing.call(ali);
// console.log(aliSing1);
// // console.log(aliSing1()); // Error
// // Uncaught TypeError: aliSing1 is not a function

// const aliSing2 = amir.sing.bind(ali);
// console.log(aliSing2);
// console.log(aliSing2());

/////////////////////////////////////////////

// function applySalesTax(taxRate, price) {
//   return price + price * taxRate;
// }
// console.log(applySalesTax(0.003, 230));

// const applyLASalesTax = applySalesTax.bind(null, 0.004, 240);
// // "null" here means it doesn't matter what "this" is
// console.log(applyLASalesTax());

// const applyCASalesTax = applySalesTax.bind(null, 0.005);
// // "null" here means it doesn't matter what "this" is
// console.log(applyCASalesTax(250));

// const applyMTSalesTax = applySalesTax.bind(null);
// // "null" here means it doesn't matter what "this" is
// console.log(applyMTSalesTax(0.006, 260));

/////////////////////////////////////////////

// function multiply(a, b) {
//   console.log(a * b);
// }

// const double = multiply.bind(null, 2);
// // "null" here means it doesn't matter what "this" is

// const triple = multiply.bind(null, 3);
// // "null" here means it doesn't matter what "this" is

// const alwaysNine = multiply.bind(null, 3, 3);
// // "null" here means it doesn't matter what "this" is

// const zarb = multiply.bind(null);
// // "null" here means it doesn't matter what "this" is

// double(3);
// double(6);
// double(9);

// triple(3);
// triple(6);
// triple(9);

// alwaysNine();
// alwaysNine(11); // always 9

// zarb(5, 10);
// zarb(3, 11);

/////////////////////////////////////////////

// class Counter {
//   constructor(startingNum = 0, incrementAmt = 1) {
//     this.count = startingNum;
//     this.incrementAmt = incrementAmt;
//   }

//   start() {
//     // setInterval(this.incrementAndPrint, 1000); // Not Working
//     setInterval(this.incrementAndPrint.bind(this), 1000);
//   }

//   incrementAndPrint() {
//     console.log(this.count);
//     this.count += this.incrementAmt;
//   }
// }

// const counter1 = new Counter();
// // counter1.start(); // برای شروع از کامنت درش بیار

// const counter2 = new Counter(100, 50);
// // counter2.start(); // برای شروع از کامنت درش بیار

/////////////////////////////////////////////

// class Cat {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   superGreet() {
//     console.log(this);
//     console.log(`#1: I am ${this.firstName}`);

//     setTimeout(function () {
//       console.log(this);
//       console.log(`#2 I am ${this.firstName}`);
//     }, 500);

//     setTimeout(() => {
//       console.log(this);
//       console.log(`#3 I am ${this.firstName}`);
//     }, 1000);
//   }
// }

// //// this in arrow function کلمه کلیدی دیس به کلمه کلیدی دیس یک سطح بالاتر اشاره میکند

// let kitty = new Cat("Kitty");
// kitty.superGreet();

/////////////////////////////////////////////

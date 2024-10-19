"use strict";

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

////  Default Parameters

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const createBooking = function (
//   flightNum,
//   ////   ES6 Default Parameters
//   numPassengers = 1 * 2.5,
//   price = 199 * numPassengers
// ) {
//   ////   ES5 Default Parameters
//   //   numPassengers = numPassengers || 1 * 2.5;
//   //   price = price || 199 * numPassengers;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 8);
// createBooking("LH123", 2, 500);

// //// اگر اندیفایند بدیم مقدار پیش فرض رو خواهند گرفت
// createBooking("LH123", 2, undefined);
// createBooking("LH123", undefined, undefined);

// createBooking("LH123", null);
// createBooking("LH123", null, null);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// How Passing Arguments Works Value vs. Reference

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const flight = "LH234";

// const amir = {
//   name: "Amir Abbasi",
//   passport: 22696377,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 22696377) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, amir);
// console.log(flight);
// console.log(amir);

///////////////////////////////////////////////////////

// const flight = "LH234";

// const amir = {
//   name: "Amir Abbasi",
//   passport: 22696377,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 22696377) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000);
// };

// newPassport(amir);
// checkIn(flight, amir);
// console.log(flight);
// console.log(amir);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Functions Accepting Callback Functions

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// //// Callback Function Basics (OtediaJS)
// function example(callback) {
//   if (typeof callback === "function") {
//     callback();
//   } else {
//     console.log("آرگومان ورودی یک تابع نیست");
//   }
// }

// //// function decolaration
// function test1() {
//   console.log("I am test 1 function");
// }
// example(test1);

// //// function expression
// const test2 = function () {
//   console.log("I am test 2 function");
// };
// example(test2);

// ////

// //// چون توابع کال بک معمولا کوتاه هستن میتونیم همزمان با فراخوانی اونهارو تعریف کنیم
// //// به این توابع، توابع بی نام میگوییم و فقط یکبار میتونیم ازشون استفاده کنیم
// //// اگر بخوایم از این تابع چن بار استفاده کنیم بهتره که موقع فراخوانی تعریفش نکنیم
// //// اگر بخوایم چندین بار از تابعمون استفاده کنیم باید مثه روشای قبلی تعریف کنیم تابعمون رو که یک نام داشته باشه که هر وقت خواستیم بتونیم ازش استفاده کنیم
// //// تعریف همزمان با فراخوانی
// example(function () {
//   console.log("I am an anonymous function");
// });

// example(() => console.log("I am an arrow function"));

// ////

// example(4);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Functions Returning Functions

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// ////
// const greetHey = greet("Hey");
// greetHey("Amir");
// greetHey("Nazi");
// ////
// greet("Hello")("Amir");
// greet("Hello")("Nazi");

///////////////////////////////////////////////////////

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// ////
// const greetHey = greet("Hey");
// greetHey("Amir");
// greetHey("Nazi");
// ////
// greet("Hello")("Amir");
// greet("Hello")("Nazi");

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// The call and apply Methods

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const luftansa = {
//   airline: "Luftansa",
//   iataCode: "LH",
//   bookings: [],
//   //// book: function(){} === book(){}
//   book(flightNum, name) {
//     console.log(`${name} - ${this.airline} - ${this.iataCode} ${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// luftansa.book(239, "Amir Abbasi");
// console.log(luftansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const books = luftansa.book;
// //// luftansa.book === normal function
// //// luftansa.book ==! method
// //// this در این صورت عمل نخواهد کرد
// //// پس
// //// Does not work 👇
// // books(eurowings, 323, "Ali Goli");

// //// call
// books.call(eurowings, 323, "Ali Goli");
// console.log(eurowings);

// books.call(luftansa, 759, "Nazi Jon");
// console.log(luftansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// books.call(swiss, 546, "Hani Jon");
// console.log(swiss);

// //// apply
// //// دقیقا مثه کال میمونه اما
// //// apply باید ارگومان های ورودی داخل آرایه قرار بگیرند
// books.apply(swiss, [546, "Tina Jon"]);
// console.log(swiss);

// //// call بهتره در اکثر موارد از کال استفاده کنیم
// const flightData = [985, "Asal Jon"];
// books.apply(swiss, flightData);
// books.call(swiss, ...flightData);

// //// bind
// const bookLH = books.bind(luftansa);
// const bookEW = books.bind(eurowings);
// const bookLX = books.bind(swiss);

// bookLH(236, "Mahnaz 1");
// bookEW(486, "Mahnaz 2");
// bookLX(956, "Mahnaz 3");

// const bookLH_747 = books.bind(luftansa, 747);
// bookLH_747("Amir 1");
// bookLH_747("Amir 2");
// bookLH_747("Amir 3");

// //// With Event Listener
// luftansa.planes = 300;
// luftansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// //// handeler function
// //// addEventListener('click', handeler function)
// document
//   .querySelector(".buy")
//   .addEventListener("click", luftansa.buyPlane.bind(luftansa));

///////////////////////////////////////////////////////

// //// Partical Application way 1
// const addTax = (rate, value) => {
//   return (value + value) * rate;
// };
// console.log(addTax(2, 10));

// const addVAT = addTax.bind(null, 10);

// console.log(addVAT(3));
// console.log(addVAT(4));

///////////////////////////////////////////////////////

// //// Partical Application way 2
// const addTax = function (rate) {
//   return function (value) {
//     return (value + value) * rate;
//   };
// };

// const addVAT = addTax(10);

// console.log(addVAT(3));
// console.log(addVAT(4));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// توابع بازگشتی
//// Immediately Invoked Function Expressions (IIFE)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// //// توابع بازگشتی (OtediaJS)

// //// برنامه متوقف میشود و لایو سرور یجورایی هنگ میکنه
// //// let i = 0;
// //// function recFunction() {
// ////   i++;
// ////   console.log(i);
// ////   recFunction();
// //// }
// //// recFunction();

// //// فاکتوریل
// //// fact(n) = n × (n-1) × (n-2) × ... × 2 × 1
// //// fact(5) = 5 × 4 × 3 × 2 × 1 = 120
// //// fact(n) = n × fact(n-1)

// function fact1(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * fact1(n - 1);
//   }
// }
// console.log(fact1(5));
// //// 5 * 4 * 3 * 2 * 1;

// //// تابع بالا رو به صورت غیر بازگشتی مینویسیم
// function fact2(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(fact2(5));

///////////////////////////////////////////////////////

// //// Immediately Invoked Function Expression (IIFE) (OtediaJS)
// (function () {
//   console.log("This is an IIFE");
// })();
// //// () پرانتز آخر برای اجرا شدن است

// (() => {
//   console.log("This is an IIFE");
// })();

// //// Send args to IIFEs
// (function (n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   console.log(result);
// })(5);

// //// Seperate variables scope
// (function () {
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   console.log(c);
// })();

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// Closures

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// //// Nested Functions (OtediaJS)
// function outer() {
//   let outside = "Outside";
//   function inner() {
//     let inside = "Inside";
//     console.log(inside);
//     console.log(outside);
//   }
//   console.log(outside);
//   inner();
// }
// outer();
// // inner(); //// Error

///////////////////////////////////////////////////////

// //// Closures (OtediaJS)
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// //// way 1
// const adder1 = makeAdder(50);
// const adder2 = makeAdder(30);
// console.log(adder1(5));
// console.log(adder2(3));

// //// way 2
// console.log(makeAdder(1)(110));

// //// Change outside variables
// function makeCounter(start) {
//   let i = start;
//   return function () {
//     return i++;
//   };
// }

// const counter1 = makeCounter(1);
// const counter2 = makeCounter(11);
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());

// //// (Not Save in variable)
// console.log(makeCounter(1)());
// console.log(makeCounter(1)());

///////////////////////////////////////////////////////

// //// Closures (JonasJS)
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//// More Closure Examples

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// let f;

// const g = function () {
//   const a = 20;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 30;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //// Re-assigning f function
// h();
// f();
// f();
// f();
// console.dir(f);

///////////////////////////////////////////////////////

// //// 2000ms === 2second
// setTimeout(function () {
//   console.log("Hello");
// }, 2000);
// //// بعد از گذشت دو ثانیه اجرا میشود

///////////////////////////////////////////////////////

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`${n}`);
//     console.log(`${perGroup}`);
//   }, wait * 1000);
//   console.log(`Waiting = ${wait} second`);
// };

// boardPassengers(180, 3);

///////////////////////////////////////////////////////

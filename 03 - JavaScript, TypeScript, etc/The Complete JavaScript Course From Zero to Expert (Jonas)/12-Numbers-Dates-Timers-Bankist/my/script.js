"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Converting and Checking Numbers

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ////       base 10 => 0,1,2,3,4,5,6,7,8,9
// //// binary base 2 => 0,1

// console.log(23 === 23.0);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// //// با این مشکل جاوااسکریپت باید کنار بیایم

// console.log(Number("23"));
// console.log(+"23");

// console.log(Number.parseInt("50px"));
// console.log(Number.parseInt("p50"));

// //// modern use
// console.log(Number.parseInt("2.5px"));
// console.log(Number.parseFloat("2.5px"));

// //// old use
// // console.log(parseInt("2.5px"));
// // console.log(parseFloat("2.5px"));

// //// isNaN = checking if value is Not a Number (NaN)
// console.log("---------isNaN---------");
// console.log(Number.isNaN(20));
// console.log(Number.isNaN("20"));
// console.log(Number.isNaN(+"20px"));
// console.log(23 / 0);
// console.log(Number.isNaN(23 / 0));

// //// isFinite = Best way to checking if value is number
// console.log("---------isFinite---------");
// console.log(Number.isFinite(20));
// console.log(Number.isFinite("20"));
// console.log(Number.isFinite(+"20px"));
// console.log(23 / 0);
// console.log(Number.isFinite(23 / 0));

// //// isInteger = عدد صحیح
// console.log("---------isInteger---------");
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.01));
// console.log(Number.isInteger("20"));
// console.log(Number.isInteger(+"20px"));
// console.log(23 / 0);
// console.log(Number.isInteger(23 / 0));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Math and Rounding

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 7, 13));
// console.log(Math.max(5, 18, "23", 7, 13));
// console.log(Math.max(5, 18, "23px", 7, 13));

// console.log(Math.min(5, 18, 23, 7, 13));

// console.log(Math.PI);

// //// Math.random() => 0 - 1 عددی تصادفی بین صفر تا یک رو بما میده
// console.log(Math.random());

// //// 0 ta 9
// console.log(Math.random() * 10);
// console.log(Math.trunc(Math.random() * 10));

// //// 1 ta 10
// console.log(Math.random() * 10 + 1);
// console.log(Math.trunc(Math.random() * 10 + 1));

/////////////////////////////////////////////////

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// };
// console.log(randomInt(10, 20));
// console.log(randomInt(2, 6));

/////////////////////////////////////////////////

// console.log("-----round-----");
// console.log(Math.round("23.3"));
// console.log(Math.round(23.3));
// console.log(Math.round(23.7));

// console.log("-----ceil-----");
// console.log(Math.ceil("23.3"));
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.7));

// console.log("-----floor-----");
// console.log(Math.floor("23.3"));
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.7));
// console.log(Math.floor(-5.2));
// console.log(Math.floor(-5.8));

// console.log("-----trunc-----");
// console.log(Math.trunc("23.3"));
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.7));
// console.log(Math.trunc(-5.2));
// console.log(Math.trunc(-5.8));

/////////////////////////////////////////////////

// //// toFixed رشته برمیگردونه نه عدد
// console.log(2.7);
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));

// console.log(Number(2.7585).toFixed(2));
// console.log(+(2.7585).toFixed(2));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// The Remainder Operator

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log(5 / 2);
// console.log(5 % 2);

// console.log(8 / 3);
// console.log(8 % 3);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(254));
// console.log(isEven(255));

/////////////////////////////////////////////////

// const evenOrOdd = (n) => {
//   if (n % 2 === 0) {
//     return "is Even";
//   } else {
//     return "is Odd";
//   }
// };

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(254));
// console.log(evenOrOdd(255));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Numeric Separators

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log(2875687545285);
// console.log(2_875_687_545_285);

// console.log(1_500);
// console.log(15_00);

// console.log(1.55_55);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Working with BigInt

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// بزرگترین عددی که جاوا اسکریپت به درستی نشون میده
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 - 1);

// console.log(154487468465416313218644131321);
// //// BigInt
// console.log(154487468465416313218644131321n);
// console.log(BigInt(154487468465));

// console.log(1000n + 1000n);
// console.log(545412222222155684847684n + 545412222222155684847684n);

// console.log(Math.sqrt(16));
// //// Error
// //// console.log(Math.sqrt(16n));

// ////

// const big = 548768748654685468547n;
// const num = 23;
// //// Error
// //// console.log(big * num);
// console.log(big * BigInt(num));

// ////

// console.log(20n > 15);

// console.log(typeof 20);
// console.log(typeof 20n);

// console.log(20n === 20);
// console.log(20n == 20);
// console.log(20n == "20");

// ////

// console.log(10 / 3);
// console.log(10n / 3n);

// console.log(11 / 3);
// console.log(11n / 3n);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Creating Dates

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log(new Date());
// console.log(Date.now());

// const now = new Date();
// console.log(now);

// console.log(new Date("Aug 02 2023 18:50"));
// console.log(new Date("December 24, 2023"));

// //// Month 1 - 12
// console.log(new Date("2023 12 1"));
// //// Month 0 - 11
// console.log(new Date(2023, 11, 1));
// console.log(new Date(2023, 12, 1));

// console.log(new Date("Dec 02 2023 18:50"));
// //// 0-999 ms / 0-59 min & sec / month 0-11
// console.log(new Date(2023, 11, 1, 23, 59, 59, 999));

// //// Unix Time
// console.log(new Date(0));
// //// 3 day 24h 60min 60sec 1000ms
// console.log(3 * 24 * 60 * 60 * 1000);
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// console.log(-3 * 24 * 60 * 60 * 1000);
// console.log(new Date(-3 * 24 * 60 * 60 * 1000));
// ////
// console.log(new Date(548879847657));
// console.log(new Date(-548879847657));

/////////////////////////////////////////////////

// const future = new Date(2037, 10, 19, 15, 23);

// console.log(future);

// console.log(future.getTime());
// console.log(Number(future));
// console.log(+future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getMilliseconds());

// future.setFullYear(2040);
// console.log(future);

// console.log(future.toDateString());

// console.log(future.getTime());

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Operations With Dates

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// //// 24h 60min 60sec 1000ms
// const calcDaysPassed = (date1, date2) => {
//   return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
// };

// console.log(calcDaysPassed(new Date(2037, 8, 15), new Date(2037, 7, 15)));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Internationalizing Dates (Intl)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",

//   //   month:"2-digit",
//   //   month:"numeric",
//   month: "long",

//   //   year: "2-digit",
//   year: "numeric",

//   weekday: "long",
// };

// console.log(new Intl.DateTimeFormat("en-US"));
// console.log(new Intl.DateTimeFormat("en-US").format());
// console.log(new Intl.DateTimeFormat("en-GB").format());
// console.log(new Intl.DateTimeFormat("fa-IR").format());

// console.log(new Intl.DateTimeFormat("en-US", options).format());
// console.log(new Intl.DateTimeFormat("fa-IR", options).format());

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Internationalizing Numbers (Intl)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const num = 3_884_764.23;

// const options = {
//   //   style: "unit",
//   //   style: "percent",
//   style: "currency",
//   //   unit: "mile-per-hour",
//   //   unit: "celsius",
//   currency: "EUR",
// };

// console.log(new Intl.NumberFormat("en-US"));
// console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
// console.log("GB: ", new Intl.NumberFormat("en-GB", options).format(num));
// console.log("DE: ", new Intl.NumberFormat("de-DE", options).format(num));
// console.log("IR: ", new Intl.NumberFormat("fa-IR", options).format(num));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Timers setTimeout and setInterval

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log("Waitting...");
// setTimeout(() => console.log("1sec"), 1000);
// setTimeout(() => console.log("2sec"), 2000);
// setTimeout(() => console.log("3sec"), 3000);
// setTimeout(() => console.log("4sec"), 4000);
// setTimeout(() => console.log("5sec"), 5000);
// setTimeout(() => console.log("6sec"), 6000);

/////////////////////////////////////////////////

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

/////////////////////////////////////////////////

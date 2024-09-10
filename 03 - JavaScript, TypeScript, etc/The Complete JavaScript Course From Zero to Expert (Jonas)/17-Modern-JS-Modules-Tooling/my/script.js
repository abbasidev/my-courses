//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// Exporting and Importing in ES6 Modules

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// import { calcAge, aliAge as ali, nazi } from "./shoppingCard.js";

// console.log("Bye");

// //// Error
// // console.log(amirAge);

// console.log(calcAge(1999));

// console.log(ali, nazi);

//////////////////////////////////////////

// //// ممعولا اینکار رو نمیکنیم
// //// * === everything
// //// import all export as shoppingCard
// import * as ShoppingCard from "./shoppingCard.js";

// console.log(ShoppingCard.calcAge(1999));
// console.log(ShoppingCard.aliAge, ShoppingCard.nazi);

//////////////////////////////////////////

// //// calcAge 2
// import calcAge2 from "./shoppingCard.js";
// console.log(calcAge2(1959));

//////////////////////////////////////////

// //// بین ایمپورت و اکسپورت لایو کانکشن وجود داره

// import add, { cart } from "./shoppingCard.js";

// add("pizza", 2);
// add("bread", 5);
// add("apples", 4);

// console.log(cart);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// Top-Level await (ES2022)

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// نیازی به async نداریم

// console.log("Start");

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();

// console.log(data);

// console.log("End");

// //// Top-Level await اجرای کد رو متوقف میکنه در ماژول ها
// //// بعضی جاها میتونه خوب باشه اما اگه کار اویت طولانی باشه برای برنامه ما مضره

//////////////////////////////////////////

// console.log("Start");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// };

// getLastPost();

// console.log("End");

//////////////////////////////////////////

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// //// Not very clean (regular script way)
// // const lastPost = getLastPost();
// // console.log(lastPost);
// // lastPost.then((last) => console.log(last));

// //// very clean (Top-Level await in modules)
// const lastPost = await getLastPost();
// console.log(lastPost);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// The Module Pattern

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //// الگوی ماژول اینگونه کار میکند
// //// سالها به جای ماژول ها از این روش استفاده میشد
// //// فقط برای دونسنته ما از این روش دیگه استفاده نمیکنیم
// //// برای درک بهتر به مبحث کلوژر بروید

// //// IIFE
// const calcAge = (function () {
//   const aliAge = 39;
//   const naziAge = 18;
//   const now = new Date().getFullYear();

//   const calcAgePerson = function (birthYear) {
//     console.log(now - birthYear);
//   };

//   return {
//     aliAge,
//     naziAge,
//     now,
//     calcAgePerson,
//   };
// })();

// calcAge.calcAgePerson(1999);
// console.log(calcAge.now);
// console.log(calcAge.aliAge);
// console.log(calcAge.naziAge);

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// CommonJS Modules

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// دیگه ازش استفاده نمیکنیم
//// نحوه عملکردش رو ببینید ولی کار نمیکنه در اینجا چون با استفاده از نود جی اسه

//// export
// export.calcAge = function (birthYear) {
//   return new Date().getFullYear() - birthYear;
// };

//// import
// const { calcAge } = require("./shoppingCard.js");

//////////////////////////////////////////

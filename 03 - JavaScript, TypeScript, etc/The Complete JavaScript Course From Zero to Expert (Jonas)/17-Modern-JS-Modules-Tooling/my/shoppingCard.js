//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//// Exporting and Importing in ES6 Modules

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// console.log("Hello");

// //// این متغیرها به فضای گلوبال نمیروند و فقط در این ماژول در دسترس هستند
// const amirAge = new Date().getFullYear() - 1999;

// export const calcAge = function (birthYear) {
//   return new Date().getFullYear() - birthYear;
// };

// //// Error
// //// export همیشه باید در فضای اصلی ماژول باشد
// // if (true) {
// //   export const calcAge2 = function (birthYear) {
// //     return new Date().getFullYear() - birthYear;
// //   };
// //   console.log(calcAge(1991));
// // }

// const aliAge = 39;
// const naziAge = 18;

// export { aliAge, naziAge as nazi };

// //// calcAge 2
// export default function (birthYear) {
//   return new Date().getFullYear() - birthYear;
// }

//////////////////////////////////////////

//// بین ایمپورت و اکسپورت لایو کانکشن وجود داره

export const cart = [];

//// add
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

//////////////////////////////////////////

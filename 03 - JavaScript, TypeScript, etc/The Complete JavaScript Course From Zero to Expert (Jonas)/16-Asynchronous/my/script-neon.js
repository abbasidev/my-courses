"use strict";

////////////////////////////////////////////////

// function print() {
//   setTimeout(function () {
//     console.log("A");
//   }, 3000);
// }

// //// به ترتیب اجرا میشن
// console.log("B");
// print();
// console.log("C");

////////////////////////////////////////////////

// function print_1() {
//   setTimeout(function () {
//     console.log("print 1 is End");
//   }, 3000);
// }

// function print_2() {
//   setTimeout(function () {
//     console.log("print 2 is End");
//   }, 1000);
// }

// function print_3() {
//   setTimeout(function () {
//     console.log("print 3 is End");
//   }, 2000);
// }

// print_1();
// print_2();
// print_3();

////////////////////////////////////////////////

// //// callback hell
// function print_1() {
//   setTimeout(function () {
//     console.log("print 1 is End");
//     print_2();
//     function print_2() {
//       setTimeout(function () {
//         console.log("print 2 is End");
//         print_3();
//         function print_3() {
//           setTimeout(function () {
//             console.log("print 3 is End");
//           }, 1000);
//         }
//       }, 2000);
//     }
//   }, 3000);
// }
// print_1();

////////////////////////////////////////////////

// function print_1() {
//   setTimeout(function () {
//     console.log("print 1 is End");
//     print_2();
//   }, 3000);
// }

// function print_2() {
//   setTimeout(function () {
//     console.log("print 2 is End");
//     print_3();
//   }, 1000);
// }

// function print_3() {
//   setTimeout(function () {
//     console.log("print 3 is End");
//   }, 2000);
// }

// print_1();

////////////////////////////////////////////////

// function print_1() {
//   setTimeout(function () {
//     try {
//       if (true) {
//         console.log("print 1 is End");
//         print_2();
//       } else {
//         throw new Error(console.error("print 1 not End"));
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }, 3000);
// }

// function print_2() {
//   setTimeout(function () {
//     try {
//       if (false) {
//         console.log("print 2 is End");
//         print_3();
//       } else {
//         throw new Error(console.error("print 2 not End"));
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }, 1000);
// }

// function print_3() {
//   setTimeout(function () {
//     console.log("print 3 is End");
//   }, 2000);
// }

// print_1();

////////////////////////////////////////////////

// //// Promises
// function print_1() {
//   return new Promise(function (resolve, reject) {
//     if (true) {
//       resolve("print 1 is End");
//     } else {
//       reject("print 1 not End");
//     }
//   });
// }

// function print_2() {
//   return new Promise(function (resolve, reject) {
//     if (false) {
//       resolve("print 2 is End");
//     } else {
//       reject("print 2 not End");
//     }
//   });
// }

// function print_3() {
//   return new Promise(function (resolve, reject) {
//     if (true) {
//       resolve("print 3 is End");
//     } else {
//       reject("print 3 not End");
//     }
//   });
// }

// console.log(print_1());
// console.log(print_2());
// console.log(print_3());

// print_1()
//   .then(function (msg) {
//     console.log(msg);
//     return print_2();
//   })
//   .then(function (msg) {
//     console.log(msg);
//     return print_3();
//   })
//   .then(function (msg) {
//     console.log(msg);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// //// مدیریت خطاها فقط با یک کچ برای تمامی توابع انجام میشود چه توی یک چه توی دو چه توی سه به خطا بخوریم کچ میاد اعمال میشه

////////////////////////////////////////////////

// //// async & await
// async function print_1() {
//   if (true) {
//     return "print 1 is End";
//   } else {
//     throw new Error("print 1 not End");
//   }
// }

// async function print_2() {
//   if (false) {
//     return "print 2 is End";
//   } else {
//     throw new Error("print 2 not End");
//   }
// }

// async function print_3() {
//   if (true) {
//     return "print 3 is End";
//   } else {
//     throw new Error("print 3 not End");
//   }
// }

// console.log(print_1());
// console.log(print_2());
// console.log(print_3());

// //// همونطور که دیدید پرامیس برای ما برمیگردونه پس میتونیم مثه پرامیس ها باشون رفتار کنیم ولی راهکار بهتری به نام اویت وجود دارد
// // print_1()
// //   .then(function (msg) {
// //     console.log(msg);
// //     return print_2();
// //   })
// //   .then(function (msg) {
// //     console.log(msg);
// //     return print_3();
// //   })
// //   .then(function (msg) {
// //     console.log(msg);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });

// ////با استفاده از اویت از شر کدهای پرامیس هم نجات پیدا میکنیم
// ////await

// async function p() {
//   try {
//     console.log(await print_1()); // دقت کنید که به ترتیب انجام میشوند تا پرینت 1 تموم نشه به پرینت 2 نمیره و الی اخر
//     console.log(await print_2());
//     console.log(await print_3());
//   } catch (error) {
//     console.error(error);
//   }
// }

// p();

////////////////////////////////////////////////

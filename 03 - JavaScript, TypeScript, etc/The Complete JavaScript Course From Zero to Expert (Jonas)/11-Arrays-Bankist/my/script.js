"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Simple Array Methods

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// let arr1 = ["a", "b", "c", "d", "e"];
// //// [0 , 1, 2, 3, 4]
// //// [-5,-4,-3,-2,-1]

// //// slice
// console.log(arr1.slice(2));
// console.log(arr1.slice(-2));
// console.log(arr1.slice(2, 4));
// console.log(arr1.slice(-5, 5));
// console.log(arr1.slice(-4, 3));
// console.log(arr1.slice(-4, -1));
// console.log(arr1.slice(0, 4));
// console.log(...arr1);
// console.log([...arr1]);

// ////

// //// slice
// console.log(arr1.slice(1, 2));
// //// splice
// console.log(arr1.splice(1, 2));
// //// از خانه ی یک به بعد دو المنت رو بردار
// console.log(arr1);

// //// reverse
// let arr2 = ["f", "g", "h", "i", "j"];
// console.log(arr2.reverse());
// console.log(arr2);

// ////

// arr1 = ["a", "b", "c", "d", "e"];
// arr2 = ["f", "g", "h", "i", "j"];

// //// concat
// const letters = arr1.concat(arr2);
// console.log(letters);
// console.log(arr1);
// console.log(arr2);
// ////
// console.log([...arr1, ...arr2]);

// //// join
// console.log(arr1.join(" - "));
// console.log(arr2.join(" + "));
// console.log(letters.join(", "));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// The new at Method

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// console.log(arr[1]);
// console.log(arr.at(1));

// console.log(arr[arr.length - 1]);
// //// [0 , 1, 2, 3, 4]
// //// [-5,-4,-3,-2,-1]
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// console.log(arr.slice(-1));
// console.log(arr.slice(-1)[0]);

// console.log("Amir".at(0));
// console.log("Amir".at(-1));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Looping Arrays forEach

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //// way 1
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`${movement}`);
//   } else {
//     //// Math.abs absolote = علامت منفی رو حذف میکنه
//     console.log(`${Math.abs(movement)}`);
//   }
// }

// console.log("-------------- forEach --------------");

// //// way 2
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`${movement}`);
//   } else {
//     //// Math.abs absolote = علامت منفی رو حذف میکنه
//     console.log(`${Math.abs(movement)}`);
//   }
// });
// //// 0 : function(200)
// //// 1 : function(450)
// //// 2 : function(400)
// //// ...

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //// way 1
// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`${i + 1}: ${mov}`);
//   } else {
//     console.log(`${i + 1}: ${Math.abs(mov)}`);
//   }
// }

// console.log("-------------- forEach --------------");

// //// way 2
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`${i + 1}: ${mov}`);
//   } else {
//     console.log(`${i + 1}: ${Math.abs(mov)}`);
//   }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// forEach With Maps and Sets

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// //// Maps
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, arr) {
//   console.log(`${key}: ${value}`);
// });

// //// Sets
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);

// //// way 1
// currenciesUnique.forEach(function (value, _, arr) {
//   console.log(`${_}: ${value}`);
// });

// //// way 2
// currenciesUnique.forEach(function (value) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// The map Method

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// ////

// const movementsUsd1 = movements.map(function (mov) {
//   return Math.trunc(mov * eurToUsd);
// });

// const movementsUsd2 = movements.map((mov) => {
//   return 20;
// });

// console.log(movements);
// console.log(movementsUsd1);
// console.log(movementsUsd2);

// ////

// const movementsUsd3 = [];
// for (const mov of movements) {
//   movementsUsd3.push(Math.trunc(mov * eurToUsd));
// }
// console.log(movementsUsd3);

// ////

// const movementsUsd4 = movements.map(function (mov, i, arr) {
//   if (mov > 0) {
//     return `${i + 1}: ${mov}`;
//   } else {
//     return `${i + 1}: ${Math.abs(mov)}`;
//   }
// });
// console.log(movementsUsd4);

// ////

// const movementsUsd5 = movements.map(function (mov, i, arr) {
//   return `${i + 1}: ${mov > 0 ? mov : Math.abs(mov)}`;
// });
// console.log(movementsUsd5);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////  The filter Method

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const deposits1 = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits1);

// const deposits2 = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(deposits2);

// const deposits3 = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     deposits3.push(mov);
//   }
// }
// console.log(deposits3);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// The reduce Method

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const balance1 = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`${i + 1}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance1);

// const balance2 = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 10000);
// console.log(balance2);

// let balance3 = 0;
// for (const mov of movements) {
//   balance3 += mov;
// }
// console.log(balance3);

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// //// Maximum value
// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// //// movements[0] رو میتونیم نزاریمش
// console.log(max);

// //// Minimum value
// const min = movements.reduce(function (acc, mov) {
//   if (acc < mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// //// movements[0] رو میتونیم نزاریمش
// console.log(min);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// The Magic of Chaining Methods

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// const eurToUsd = 1.1;

// //// Chaining زنجیر کردن
// const totalDepositsUsd = Math.trunc(
//   movements
//     .filter(function (mov) {
//       return mov > 0;
//     })
//     .map(function (mov, i, arr) {
//       //   console.log(arr);
//       return mov * eurToUsd;
//     })
//     .reduce(function (acc, mov) {
//       return acc + mov;
//     }, 0)
// );

// console.log(totalDepositsUsd);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////  The find Method
////  The findIndex Method

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(function (mov) {
//   return mov < 0;
// });
// console.log(movements);
// console.log(firstWithdrawal);

/////////////////////////////////////////////////

// const account1 = {
//   owner: "Jonas Schmedtmann",
// };
// const account2 = {
//   owner: "Jessica Davis",
// };
// const account3 = {
//   owner: "Steven Thomas Williams",
// };
// const account4 = {
//   owner: "Sarah Smith",
// };

// const accounts = [account1, account2, account3, account4];

// ////

// const account = accounts.find(function (acc) {
//   return acc.owner === "Jessica Davis";
// });
// console.log(account);

// const account_2 = accounts.findIndex(function (acc) {
//   return acc.owner === "Jessica Davis";
// });
// console.log(account_2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// some and every

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //// some

// //// Equality check
// console.log(movements.includes(-130));

// console.log(
//   movements.some((mov) => {
//     return mov === -130;
//   })
// );

// //// Condition check
// const anyDeposits1 = movements.some((mov) => {
//   return mov > 5000;
// });
// console.log(anyDeposits1);

// //// every
// const anyDeposits2 = movements.every((mov) => {
//   //   return mov > 0;
//   return mov > -700;
// });
// console.log(anyDeposits2);

// console.log(
//   movements.every((mov) => {
//     // return mov > 0;
//     return mov > -700;
//   })
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// flat and flatMap

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// const arr2 = [[[1, [2, 3]]], [4, [5, 6]], 7, 8, 9];

// console.log(arr1.flat());
// console.log(arr2.flat());
// console.log(arr2.flat(2));
// console.log(arr2.flat(3));

/////////////////////////////////////////////////

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
// };

// const accounts = [account1, account2, account3, account4];

// //// flat
// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// //// ((acc, mov) => {return acc + mov;}, 0);
// console.log(overalBalance);

// //// flatMap
// const accountMovements2 = accounts.flatMap((acc) => acc.movements);
// console.log(accountMovements2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// Sorting Arrays

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const owners = ["Janas", "Amir", "Zack", "Bob"];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort());

// //// return 0, a, b (keep order)
// //// return 0, b, a (switch order)
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(movements);

// ////

// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });
// console.log(movements);

// ////

// movements.sort((a, b) => a - b);
// console.log(movements);

// ////

// movements.sort((a, b) => b - a);
// console.log(movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//// More Ways of Creating and Filling Arrays

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log([1, 2, 3, 4, 5, 6]);
// console.log(new Array(1, 2, 3, 4, 5, 6));

// const z = [7];
// console.log(z);

// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// console.log(x.fill());
// console.log(x.fill(1));

// //// 2 = element / 3 = start / 5 = end
// console.log(x.fill(2, 3, 5));

/////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(8, 4, 6);
// console.log(arr);

// const x = Array.from({ length: 7 }, () => {
//   return 1;
// });
// console.log(x);

// //// cur = current = _ = میتونیم وقتی از کارنت استفاده نمیکنیم بجاش از اندرلاین که به معنای دور ریختنی است استفاده کنیم
// //// (cur, i) or (_, i)
// const z = Array.from({ length: 7 }, (_, i) => {
//   return i + 1;
// });
// console.log(z);

/////////////////////////////////////////////////

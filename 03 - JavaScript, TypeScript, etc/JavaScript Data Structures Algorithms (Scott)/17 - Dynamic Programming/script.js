/////////////////////////////////////////////
//// Fibonacci Sequence
/////////////////////////////////////////////

// let counter = 0;

// function fib(n) {
//   counter++;
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// const n = 7;
// // const n = 14;
// // const n = 21;
// console.log("Fib of", n, "=", fib(n));
// console.log("Counter:", counter);

/////////////////////////////////////////////
//// Memoization
/////////////////////////////////////////////

// let memo = [];
// let counter = 0;

// function fib(n) {
//   counter++;
//   if (memo[n] !== undefined) {
//     return memo[n];
//   }
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   memo[n] = fib(n - 1) + fib(n - 2);
//   return memo[n];
// }

// let n = 7;
// // let n = 14;
// // let n = 21;
// console.log("Fib of", n, "=", fib(n));
// console.log("Counter:", counter);

/////////////////////////////////////////////
//// Bottom Up
/////////////////////////////////////////////

let counter = 0;

function fib(n) {
  let fibList = [];
  fibList[0] = 0;
  fibList[1] = 1;

  for (let index = 2; index <= n; index++) {
    counter++;
    fibList[index] = fibList[index - 1] + fibList[index - 2];
  }

  return fibList[n];
}

let n = 7;
// let n = 14;
// let n = 21;
console.log("Fib of", n, "=", fib(n));
console.log("Counter:", counter);

/////////////////////////////////////////////

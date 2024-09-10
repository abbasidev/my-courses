/////////////////////////////////////////////

//// ساختار داده در جاوا اسکریپت
//// الگوریتم در جاوا اسکریپت
//// Big O در جاوا اسکریپت

/////////////////////////////////////////////

// //// O(n)

// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// logItems(6);

/////////////////////////////////////////////

// //// Drop Constants
// //// n+n=2n
// //// O(2n)

// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   for (let j = 0; j < n; j++) {
//     console.log(j);
//   }
// }
// logItems(6);

/////////////////////////////////////////////

// //// n*n=n^2
// //// O(n^2)

// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }
// logItems(6);

/////////////////////////////////////////////

// //// n*n*n=n^3
// //// O(n^3)

// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         console.log(i, j, k);
//       }
//     }
//   }
// }
// logItems(6);

/////////////////////////////////////////////

// //// Drop Non-Dominants
// //// O(n^2 + n)
// //// چون ان دوم تاثیری نداره حذفش میکنیم
// //// O(n^2)

// function logItems(n) {
//   //// O(n^2)
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//     //// O(n)
//     for (let k = 0; k < n; k++) {
//       console.log(k);
//     }
//   }
// }
// logItems(6);

/////////////////////////////////////////////

// //// O(1)

// function addItems(n) {
//   return n + n;
// }

// //// تعداد عملیات همچنان تغییر نکرده است و یکبار پارامتر اجرا میشود
// function addItems(n) {
//   return n + n + n;
// }

/////////////////////////////////////////////

// //// O(log n) // مراجعه به جزوه و اسکرین ها

/////////////////////////////////////////////

// //// Different Terms for Input

// //// O(a+b)

// function logItems(a, b) {
//   //// O(a)
//   for (let i = 0; i < a; i++) {
//     console.log(i);
//   }
//   //// O(b)
//   for (let j = 0; j < b; j++) {
//     console.log(j);
//   }
// }
// logItems(4, 5);

/////////////////////////////////////////////

// //// Different Terms for Input

// //// O(a*b)

// function logItems(a, b) {
//   //// O(a)
//   for (let i = 0; i < a; i++) {
//     //// O(b)
//     for (let j = 0; j < b; j++) {
//       console.log(i, j);
//     }
//   }
// }
// logItems(4, 5);

/////////////////////////////////////////////

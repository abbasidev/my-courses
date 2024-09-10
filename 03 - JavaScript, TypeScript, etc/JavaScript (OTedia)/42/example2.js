//// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This is an IIFE");
})();

//// Send args to IIFEs
(function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
})(4);

//// Seperate variables scope
//// قدیم برای اینکه حوزه بندی کنیم و متغیرها در گلوبال اسکوپ در دسترس نباشند از این روش استفاده میکردیم از اکما اسکریپت شش دیگه از این روش استفاده نمیکنیم
(function () {
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
})();

//// Use strict mode
(function (n) {
  "use strict";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
})(5);

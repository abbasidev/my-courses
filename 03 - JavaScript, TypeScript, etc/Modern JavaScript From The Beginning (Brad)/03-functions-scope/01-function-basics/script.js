// Define a function
function sayHello() {
  console.log("Hello World");
}

// Invoke, execute or call a function
// فراخوانی، اجرا یا فراخوانی یک تابع
sayHello();

// Define a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// Invoke function with arguments
add(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// پارامترها نام متغیرهایی هستند که برای انتقال داده به یک تابع استفاده می شوند
// Arguments are the values that are passed into the function
// آرگومان ها مقادیری هستند که به تابع منتقل می شوند

// Returning a value
// برگرداندن یک مقدار
function subtract(num1, num2) {
  return num1 - num2;
  // بعد از ریترن چیزی نباید قرار بدیم چون تابع بعد از ریترن متوقف میشود
  console.log("After the return");
}

// Assign the returned value to a variable
const result = subtract(10, 2);

console.log(result, subtract(20, 5));

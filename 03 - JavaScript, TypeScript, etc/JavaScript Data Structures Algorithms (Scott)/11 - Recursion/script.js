/////////////////////////////////////////////
//// Call Stack
/////////////////////////////////////////////

function three() {
  console.log(3);
}

function two() {
  three();
  console.log(2);
}

function one() {
  two();
  console.log(1);
}

one();

/////////////////////////////////////////////
//// Factorial
/////////////////////////////////////////////

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

/////////////////////////////////////////////

//// Default Parameters (Default Arguments)
//// Function Redeclaration

function power(base, count = 2) {
  let result = 1;
  for (let i = 0; i < count; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2));
console.log(power(2, 1));
console.log(power(2, 3));
console.log(power(3, 4));

power = function () {
  console.log("Hello World!");
};

console.log(power(3, 4));

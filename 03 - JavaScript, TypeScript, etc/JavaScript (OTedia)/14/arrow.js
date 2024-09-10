//// Arrow Functions

/////////////////////////////////////////
function square1(x) {
  return x * x;
}
console.log(square1(10));

/////////////////////////////////////////
const square2 = function (x) {
  return x * x;
};
console.log(square2(10));

/////////////////////////////////////////
const square3 = (x) => x * x;
console.log(square3(10));

/////////////////////////////////////////
const sum = (x, y) => x + y;
console.log(sum(10, 20));

/////////////////////////////////////////
const message = () => "Hello World!";
console.log(message());

/////////////////////////////////////////
const tax = (salary) => {
  let taxable = salary - 5000;
  let amount = 0.25 * taxable;
  return amount;
};
console.log(tax(8000));

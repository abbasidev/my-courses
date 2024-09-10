const numbers = [1, 2, 3, 4, 5, 6];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// نحوه اجرا این حلقه
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2);

// Using a for of loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum3());

// Shopping cart example (objects)
const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);

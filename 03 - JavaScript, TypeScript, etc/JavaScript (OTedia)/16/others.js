//// forEach and filter Methods

function show(value) {
  console.log(value);
}

let colors = ["Red", "Green", "Blue"];
colors.forEach(show);

colors.forEach((value) => console.log(value));

colors.forEach((value, index) =>
  console.log(`Color at position ${index} is ${value}`)
);

let elements = ["green", 22, 11, 5, 12, 24, "blue"];
let result = elements.filter((value) => value % 2 === 0); // اعداد زوج رو برمیگردونه
console.log(result);

console.log(elements);

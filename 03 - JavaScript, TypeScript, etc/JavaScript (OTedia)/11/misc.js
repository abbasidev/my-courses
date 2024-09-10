//// Miscellaneous features

let numbers = [3, 5, 1, 11, 14, 13];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
console.log(numbers);

let fruits = ["Apple", "Orange", "Banana", "Cherry"];
for (let value of fruits) {
  console.log(value);
}
console.log("-----------");

for (let i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  console.log(i);
}
console.log("-----------");

for (let i = 0; i < 10; i++) {
  if (i == 8) {
    break;
  } else if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

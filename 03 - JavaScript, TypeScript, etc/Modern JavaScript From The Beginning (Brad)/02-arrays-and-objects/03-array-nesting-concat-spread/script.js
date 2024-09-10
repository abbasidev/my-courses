console.log(new Array().__proto__);

let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);
console.log(fruits);

// Now we can access 'blueberry' with the following
x = fruits[3][1];
x = fruits.at(3).at(1);

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];
console.log(allFruits);

x = allFruits[1][2];
x = allFruits.at(0).at(1);

// concat() - Concatenate arrays
console.log(fruits);
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();
console.log(x);

////////////////////////////////////////////////
// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);
x = Array.isArray("Amir");

// from() - Create an array from an array like value
x = Array.from("12345");

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);

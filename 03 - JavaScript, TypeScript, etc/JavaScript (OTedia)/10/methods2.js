//// Array Methods 2

let fruits = ["Apple", "Orange", "Banana", "Berry"];

let a = fruits.slice(1, 3);
console.log(a);
console.log(fruits);

a = fruits.splice(1, 2);
console.log(a);
console.log(fruits);

fruits = ["Apple", "Orange", "Banana", "Berry"];
a = fruits.splice(1, 2, "Cherry", "Lemon");
console.log(a);
console.log(fruits);

a = fruits.reverse();
console.log(a);
console.log(fruits);

a = fruits.sort();
console.log(a);
console.log(fruits);

console.log([5, 9, 15, 23].sort());

console.log(fruits.indexOf("Lemon"));
console.log(fruits.indexOf("Banana"));

console.log(fruits.includes("Lemon"));
console.log(fruits.includes("Banana"));

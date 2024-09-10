//// Array Methods 1

let fruits = ["Apple", "Orange", "Banana"];

let a = fruits.pop();
console.log(a);
console.log(fruits);

a = fruits.push("Berry");
console.log(a);
console.log(fruits);

a = fruits.shift();
console.log(a);
console.log(fruits);

a = fruits.unshift("Banana");
console.log(a);
console.log(fruits);

fruits = fruits.concat(["Apple", "Lemon"]);
console.log(fruits);

let array1 = ["JavaScript", "Java"];
let array2 = ["PHP", "C++", "Python"];

let array3 = [array1, array2];
console.log(array3);

array3 = [...array1, ...array2];
console.log(array3);

console.log(array3.join());
console.log(array3.join(" & "));

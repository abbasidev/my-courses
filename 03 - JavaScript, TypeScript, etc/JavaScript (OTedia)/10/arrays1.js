//// Arrays Basics 1

let array1 = new Array(10, 20, "Hello"); // Array Constructor
let array2 = [10, 20, "Hello"]; // Array Literal

console.log(array1);
console.log(array2);

console.log(typeof array1, typeof array2);

console.log(array1.at(0));
console.log(array1[0]);

console.log(array1.at(2));
console.log(array2[2]);

console.log(array1.at(4));
console.log(array1[4]);

array1[0] = 4;
array1[4] = 22;
console.log(array1);

let array3 = [10, [20, 22, 11], "Hello", true];
console.log(array3);
console.log(array3[1]);
console.log(array3[1][2]);

console.log(array1.length);
array1.length = 2;
console.log(array1);
array1.length = 5;
console.log(array1);
console.log(array1.length);

delete array1[0];
console.log(array1);
console.log(array1.length);

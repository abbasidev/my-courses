//// Arrays Basics 2

let array1 = [10, 20, "Hello"];
let array2 = [10, 20, "Hello"];

console.log(array1 == array2);
console.log(array1[1] == array2[1]);
console.log(array1[1] == array2[2]);

let array3 = array1;
console.log(array1 == array3);
array1[1] = "JavaScript";
console.log(array1);
console.log(array3);

let [x, y, z] = [1, 3, 4];
console.log(x, y, z);
[x, y, z] = [z, x, y];
console.log(x, y, z);

const fruits = ["Apple", "Orange", "Banana"];
fruits[1] = "Berry";
// fruits = [22 , 33]; // Error
console.log(fruits);

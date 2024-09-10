//// String Methods & Properties

let str = "Hello World!";

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.charAt(1));
console.log(str.charAt(6));
console.log(str[6]);

str = "Hello, welcome to JavaScript!";

console.log(str.indexOf("o"));
console.log(str.indexOf("to"));
console.log(str.indexOf("Java"));
console.log(str.indexOf("java"));

console.log(str.indexOf("o", 5)); // از اندیس پنج به بعد او رو پیدا کن
console.log(str.indexOf("o", 13)); // از اندیس سیزده به بعد او رو پیدا کن

console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("o", 10));
console.log(str.lastIndexOf("css"));

console.log(str.includes("welcome"));
console.log(str.includes("JavaScript"));
console.log(str.includes("javascript"));

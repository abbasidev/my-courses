//// String Methods & Properties

let str = "Hello, welcome to JavaScript!";

console.log(str.startsWith("welcome"));
console.log(str.startsWith("Hello"));

console.log(str.endsWith("JavaScript"));
console.log(str.endsWith("!"));

console.log(str.substring(3));
console.log(str.substring(3, 10));

let str2 = "Javascript",
  str3 = "Hello";

console.log(str2.repeat(2));
console.log(str3.repeat(3));
console.log(str.substring(2, 5).repeat(3));

console.log(str3.concat(" World!"));
console.log(str2.concat(" ", "is a ", "programming language"));
console.log(str2 + " is a " + "programming language");
console.log(str3 + " " + "Wo" + "rld!");

console.log("JavaScript".repeat(2));
console.log("Hello".concat(" World!"));
console.log("Hello World!".charAt(4));
console.log("Hello World!".length);

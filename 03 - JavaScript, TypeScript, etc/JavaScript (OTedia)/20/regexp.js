//// RegExp Object

let reg1 = new RegExp("javascript", "i");
let reg2 = /javascript/i;

let reg = /javascript/i;
console.log(reg.test("Hello, welcome to javascript!"));
console.log(reg.test("Hello, welcome to JavaScript!"));

reg = /\w{6}/;
console.log(reg.test("Hello, welcome to JavaScript!"));
reg = /\w{11}/;
console.log(reg.test("Hello, welcome to JavaScript!"));

reg = /c.m/;
console.log(reg.test("Hello, welcome to JavaScript!"));
console.log(reg.test("I love JavaScript!"));

reg = /javascript/i;
console.log(reg.exec("Hello, welcome to JavaScript!"));
console.log(reg.exec("Hello, welcome to javascript!"));

reg = /.a/g;
console.log(reg.exec("Hello, welcome to JavaScript!"));
console.log(reg.exec("Hello, welcome to JavaScript!"));

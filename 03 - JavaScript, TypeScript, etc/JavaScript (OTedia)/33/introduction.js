//// Introduction to Global Object & BOM (Browser Object Model)

let n = parseInt("0x22");
console.log(n);
n = window.parseInt("0x33");
console.log(n);
window.console.log(n);
console.log(window.Infinity);

var x = 10;
var y = 20;
console.log(window.x);
console.log(y);
let z = 30;
console.log(window.z);

function example1() {
  window.a = 10;
  window.b = function () {
    console.log("Hello World");
  };
}
example1();
console.log(a);
b();

function example2() {
  c = 50;
}
example2();
console.log(c);
console.log(window.c);

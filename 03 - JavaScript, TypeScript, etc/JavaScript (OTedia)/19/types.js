//// Value(Primitive) Types vs Reference Types

let a = 10;
let b = a;
b = 40;
console.log("a = " + a);
console.log("b = " + b);

a = {
  x: 10,
  y: 20,
};
b = a;
a.x = 30;
console.log("a.x = " + a.x);
console.log("b.x = " + b.x);

b = 30;
b = {
  x: 40,
  y: 80,
};
b.x = 90;
console.log("a.x = " + a.x);
console.log("b.x = " + b.x);

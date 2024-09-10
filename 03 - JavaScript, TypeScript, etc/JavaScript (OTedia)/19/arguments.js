//// Passing Value(Primitive) Types & Reference Types as Arguments

function example1(a) {
  console.log("a = " + a);
  a = 40;
  console.log("a = " + a);
}
let b = 20;
example1(b);
console.log("b = " + b);

function example2(a) {
  console.log("a.x = " + a.x);
  a.x = 40;
  console.log("a.x = " + a.x);
}
b = {
  x: 20,
};
example2(b);
console.log("b.x = " + b.x);

function example3(a) {
  console.log("a.x = " + a.x);
  a = {
    x: 40,
  };
  console.log("a.x = " + a.x);
}
b = {
  x: 20,
};
example3(b);
console.log("b.x = " + b.x);

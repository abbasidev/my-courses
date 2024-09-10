//// Cloning Objects

let a = 20;
let b = a;
b = 40;
console.log("a = " + a);
console.log("b = " + b);

a = {
  m: 10,
  n: 20,
};
b = a;
b.m = 40;
console.log("a.m = " + a.m);
console.log("b.m = " + b.m);

a = {
  m: 10,
  n: 20,
};
b = Object.assign({}, a);
b.m = 40;
console.log("a.m = " + a.m);
console.log("b.m = " + b.m);

b = Object.assign({ h: 11, p: "hello" }, a);
console.log(a);
console.log(b);

b = { ...a };
b.m = 40;
console.log("a.m = " + a.m);
console.log("b.m = " + b.m);

let a1 = {
  m: 10,
  n: 20,
};
let a2 = {
  x: 30,
  y: 40,
};
b = {
  ...a1,
  ...a2,
  newProperty: 66,
};
console.log(b);

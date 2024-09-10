//// Object Destructuring
let obj = { p: 42, q: true };
let { p, q } = obj;
console.log(p, q);

({ q, p } = obj);
console.log(p, q);

//// Assigning to new variable names
let { p: a, q: b } = obj;
console.log(a, b);

//// Default values
({ p = 10, q = 5 } = { p: 3, c: 10 });
console.log(p, q);

let { a: n = 10, b: m = 5 } = { a: 3 };
console.log(n, m);

//// Using rest operator
({ a, b, ...c } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a, b, c);

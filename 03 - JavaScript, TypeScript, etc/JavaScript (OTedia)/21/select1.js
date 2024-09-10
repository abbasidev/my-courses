//// Select Elements - Part 1

let a = document.getElementById("heading");
console.log(a);
console.log(a.nodeType);
console.log(a.nodeName);

let b = document.getElementsByTagName("p");
console.log(b);
console.log(b.length);
console.log(b[0]);
console.log(Array.from(b));

let c = document.getElementsByClassName("p1");
console.log(c);
console.log(c.length);
console.log(c[1]);

console.log(b[1] == c[0]);
console.log(b[1] == c[1]);

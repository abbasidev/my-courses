//// Select Elements - Part 2

let a = document.querySelector("#heading");
console.log(a);

let b = document.querySelector(".p1");
console.log(b);

let c = document.querySelectorAll(".p1");
console.log(c);
console.log(c.length);
console.log(Array.from(c));

console.log(document.body); // تگ body
console.log(document.head); // تگ head
console.log(document.images); // تمام تگ های img
console.log(document.forms); // تمام تگ های form

let d = document.body.querySelectorAll(".p1");
console.log(d);

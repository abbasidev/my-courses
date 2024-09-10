//// Creating DOM Nodes

let p1 = document.createElement("p");
let text = document.createTextNode("This is a sample text");
p1.appendChild(text);

let main = document.getElementById("main");
main.appendChild(p1);
p1.id = "p1";

let p2 = document.createElement("p");
p2.textContent = "This is another sample text";
p2.id = "p2";
main.appendChild(p2);

console.log(p1.textContent);
console.log(main.textContent);

p2.textContent = '<a href="#">link</a>';

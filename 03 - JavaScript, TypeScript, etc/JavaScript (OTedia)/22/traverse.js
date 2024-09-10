//// DOM Traversing = حرکت در درخت دام

let main = document.getElementById("main");

console.log(main.childNodes);
console.log(main.children);

console.log(main.firstChild);
console.log(main.lastChild);

console.log(main.firstElementChild);
console.log(main.lastElementChild);

let heading = document.getElementById("heading");

console.log(heading.nextSibling.nodeName);
console.log(heading.previousSibling.nodeName);
console.log(heading.nextElementSibling.nodeName);
// console.log(heading.previousElementSibling.nodeName);

console.log(heading.parentNode.childNodes.length);
console.log(heading.parentNode.children.length);

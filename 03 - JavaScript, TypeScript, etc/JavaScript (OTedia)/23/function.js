//// Creating Elements With a Function

function createElement(tag, text) {
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

const main = document.getElementById("main");

let heading = createElement("h1", "List of fruits");
let ul = createElement("ul", "");
let li1 = createElement("li", "Apple");
let li2 = createElement("li", "Orange");
let li3 = createElement("li", "Banana");
let li4 = createElement("li", "Cherry");
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
main.appendChild(heading);
main.appendChild(ul);

console.log(main.childNodes[1].childNodes);

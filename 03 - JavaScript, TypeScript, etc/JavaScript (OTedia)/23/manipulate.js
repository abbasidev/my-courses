//// DOM Manipulation

function createElement(tag, text) {
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

let main = document.getElementById("main");
let ul = document.querySelector("ul");
let p = createElement("p", "This is a test paragraph");
main.insertBefore(p, ul);

let second = ul.firstElementChild.nextElementSibling;
let removed = ul.removeChild(second);

ul.appendChild(removed);

let newItem = createElement("li", "Lemon");
let oldItem = removed.previousElementSibling;
let replaced = ul.replaceChild(newItem, oldItem);

ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
ul.replaceChild(ul.firstElementChild, ul.lastElementChild);

let copyNode = ul.firstElementChild.cloneNode(true);
ul.appendChild(copyNode);

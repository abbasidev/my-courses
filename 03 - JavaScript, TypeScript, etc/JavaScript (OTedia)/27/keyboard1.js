//// Keyboard Events - Part 1

let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("keydown", handler);
input.addEventListener("keypress", handler);
input.addEventListener("keyup", handler);

// function handler(event) {
// 	p.innerHTML += event.type + ' ';
// }

function handler(event) {
  if (event.type == "keydown") {
    p.innerHTML += "keyCode: " + event.keyCode + "<br />";
  } else if (event.type == "keypress") {
    p.innerHTML += "charCode: " + event.charCode + "<br />";
  }
}

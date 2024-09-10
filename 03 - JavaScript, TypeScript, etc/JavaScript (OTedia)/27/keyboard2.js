//// Keyboard Events - Part 2

let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("keydown", handler);

// function handler(event) {
//     p.innerHTML = 'key: ' + event.key + '<br />';
//     p.innerHTML += 'code: ' + event.code + '<br />';
// }

function handler(event) {
  p.innerHTML = "Alt: " + event.altKey + "<br />";
  p.innerHTML += "Control: " + event.ctrlKey + "<br />";
  p.innerHTML += "Shift: " + event.shiftKey + "<br />";
  p.innerHTML += "Repeat: " + event.repeat + "<br />";
  if (event.ctrlKey && event.code == "KeyQ") {
    p.innerHTML += "Ctrl + Q was pressed";
  }
}

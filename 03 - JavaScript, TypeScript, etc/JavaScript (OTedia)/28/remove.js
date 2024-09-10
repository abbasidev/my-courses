//// Remove Listeners - Prevent Default Behaviours

const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

button.addEventListener("click", buttonHandler);

function buttonHandler() {
  p.innerHTML += "I`m buttonHandler<br />";
  button.removeEventListener("click", buttonHandler);
}

input.addEventListener("keypress", inputHandler);

function inputHandler(event) {
  event.preventDefault();
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

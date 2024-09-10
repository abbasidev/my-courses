//// Event Flow جریان رویداد

const main = document.getElementById("main");

main.addEventListener("click", divHandler);
document.body.addEventListener("click", bodyHandler);

function divHandler(event) {
  main.innerHTML += "I`m divHandler<br />";
  event.stopPropagation(); // جریان رویداد رو در این نقطه قطع میکنه
}

function bodyHandler(event) {
  main.innerHTML += "I`m bodyHandler<br />";
}

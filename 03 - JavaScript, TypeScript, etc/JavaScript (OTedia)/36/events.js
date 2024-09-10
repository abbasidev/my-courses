//// Browser Events

const p = document.querySelector("p");

window.addEventListener("load", function () {
  p.innerHTML += "load happened<br />";
});

window.addEventListener("DOMContentLoaded", function () {
  p.innerHTML += "DOMContentLoaded happened<br />";
});

window.addEventListener("blur", function () {
  p.innerHTML += "blur happened<br />";
});

window.addEventListener("focus", function () {
  p.innerHTML += "focus happened<br />";
});

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});

window.addEventListener("resize", function (event) {
  let red = Math.floor(255 * Math.random());
  let green = Math.floor(255 * Math.random());
  let blue = Math.floor(255 * Math.random());
  document.body.style.backgroundColor = `rgb(${red} , ${green} , ${blue}`;
});

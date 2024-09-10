//// Print Dialog & Print Events

const button = document.querySelector("button");
button.addEventListener("click", () => print());

window.addEventListener("beforeprint", function () {
  document.body.style.fontFamily = "Tahoma";
  button.style.display = "none";
});

window.addEventListener("afterprint", function () {
  document.body.style.fontFamily = "";
  button.style.display = "inline-block";
});

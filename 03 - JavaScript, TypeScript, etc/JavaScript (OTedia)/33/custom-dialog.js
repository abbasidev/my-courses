//// Custom Dialog

const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const dialog = document.getElementById("dialog");

showButton.addEventListener("click", function () {
  dialog.classList.remove("hidden");
});

hideButton.addEventListener("click", function () {
  dialog.classList.add("hidden");
});

const yes = document.getElementById("yes");
const no = document.getElementById("no");

yes.addEventListener("click", function () {
  dialog.classList.add("hidden");
});

no.addEventListener("click", function () {
  dialog.classList.add("hidden");
});

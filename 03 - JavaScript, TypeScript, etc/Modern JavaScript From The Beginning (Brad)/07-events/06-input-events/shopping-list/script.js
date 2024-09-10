const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

////////////////////////////////////////////////

// function onInput(e) {
//   heading.textContent = e.target.value;
// }

// //// دونه دونه تست شوند
// // itemInput.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput);

////////////////////////////////////////////////

// function onChecked(e) {
//   const isChecked = e.target.checked;
//   heading.textContent = isChecked ? "Checked" : "Not Checked";
// }
// checkbox.addEventListener("input", onChecked);

////////////////////////////////////////////////

function onFocus() {
  console.log("Input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "red";
}
itemInput.addEventListener("focus", onFocus);

function onBlur() {
  console.log("Input is not focused");
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("blur", onBlur);

//// Focus & Blur Events

const first = document.getElementById("firstname");
const last = document.getElementById("lastname");

first.addEventListener("focus", selectText);
last.addEventListener("focus", selectText);

function selectText(event) {
  event.target.select();
}

const day = document.getElementById("day");
const month = document.getElementById("month");

day.addEventListener("blur", (event) => {
  if (!(day.value >= 1 && day.value <= 31)) {
    day.nextElementSibling.innerHTML = "Enter a number from 1 to 31";
  }
});
month.addEventListener("blur", (event) => {
  if (!(month.value >= 1 && month.value <= 12)) {
    month.nextElementSibling.innerHTML = "Enter a number from 1 to 12";
  }
});

month.focus();

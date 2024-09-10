//// setTimeout & clearTimout Functions

const once = document.getElementById("once");
const repeat = document.getElementById("repeat");
const set = document.getElementById("set");
const clear = document.getElementById("clear");
let timer;

once.addEventListener("click", function () {
  setTimeout(timeout1, 3000);
});
function timeout1() {
  alert("3 Seconds elapsed");
}

repeat.addEventListener("click", function () {
  setTimeout(timeout2, 2000);
});
function timeout2() {
  alert("2 Seconds elapsed");
  setTimeout(timeout2, 2000);
}

set.addEventListener("click", function () {
  timer = setTimeout(function () {
    alert("4 Seconds elapsed");
  }, 4000);
});

clear.addEventListener("click", function () {
  clearTimeout(timer);
});

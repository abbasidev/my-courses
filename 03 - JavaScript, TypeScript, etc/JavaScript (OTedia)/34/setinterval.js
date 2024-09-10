//// setInterval & clearInterval Functions

const set = document.getElementById("set");
const clear = document.getElementById("clear");
const p = document.querySelector("p");
let timer;

set.addEventListener("click", function () {
  timer = setInterval(repeat, 3000);
});

function repeat() {
  p.innerHTML += "3 Seconds elapsed <br />";
}

clear.addEventListener("click", function () {
  clearInterval(timer);
});

const person = {
  myName: "Mike",
  showName() {
    p.innerHTML += `Hi, I'm ${this.myName} <br />`;
  },
};
person.showName();
setTimeout(person.showName, 3000);
window.myName = "Brian";

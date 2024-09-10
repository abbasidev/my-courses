// function myCallback(a) {
//   console.log(a, Date.now());
// }

// const intervalID = setInterval(myCallback, 1000, "Hello");

// ////

// function stopChange() {
//   clearInterval(intervalID);
// }
// document.getElementById("stop").addEventListener("click", stopChange);

////////////////////////////////////////////////////////////

// function changeColor() {
//   if (document.body.style.backgroundColor !== "black") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeColor, 500);
//   }
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById("start").addEventListener("click", startChange);
// document.getElementById("stop").addEventListener("click", stopChange);

////////////////////////////////////////////////////////////

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 500);
  }
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);

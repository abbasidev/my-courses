//// Animations with setInterval

const square = document.getElementById("square");
let angle = 0;

setInterval(rotate, 16);
function rotate() {
  angle += 1;
  square.style.transform = `rotate(${angle}deg)`;
}

//// Animations with requestAnimationFrame Function

const square = document.getElementById("square");
let angle = 0;

requestAnimationFrame(rotate);
function rotate() {
  angle += 1;
  square.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}

let canves = document.querySelector("canvas");

canves.width = window.innerWidth;
canves.height = window.innerHeight;

let c = canves.getContext("2d");

let r = 40;

// let x = 100;
// let y = 100;

//// random
let x = randomInt(0 + r, innerWidth - r);
let y = randomInt(0 + r, innerHeight - r);

// let vx = 15; //// هر چه عدد بیشتری بدیم سرعت بیشتر میشه
// let vy = 15; //// هر چه عدد بیشتری بدیم سرعت بیشتر میشه

//// random
let vx = (Math.random() - 0.5) * 15;
let vy = (Math.random() - 0.5) * 15;
//// بخاطر اینکه در جهت منفی هم حرکت کنه -0.5 رو ازش کم کردیم

function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, r, 0, 2 * Math.PI);
  c.fillStyle = "#222";
  c.fill();
  if (x + r > innerWidth || x - r < 0) {
    vx = -vx;
  }
  if (y + r > innerHeight || y - r < 0) {
    vy = -vy;
  }

  x += vx;
  y += vy;
  requestAnimationFrame(animate);
}
animate();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//// Animations without async functions
const shape = document.querySelector("#shape");

rotate(shape, 90, 2000);
move(shape, 300, 100, 2000);
rotate(shape, 180, 500);
move(shape, 300, 300, 2000);

function rotate(elm, endAngle, duration) {
  let startAngle = parseFloat(elm.style.transform.substr(7));
  if (Number.isNaN(startAngle)) {
    startAngle = 0;
  }
  let angle = startAngle;
  let frames = duration / 30;
  let step = (endAngle - startAngle) / frames;
  let i = 0;
  const interval = setInterval(() => {
    angle += step;
    elm.style.transform = `rotate(${angle}deg)`;
    i++;
    if (i >= frames) {
      elm.style.transform = `rotate(${endAngle}deg)`;
      clearInterval(interval);
    }
  }, 30);
}

function move(elm, left, top, duration) {
  let x = parseInt(getComputedStyle(elm).getPropertyValue("left"));
  let y = parseInt(getComputedStyle(elm).getPropertyValue("top"));
  const frames = duration / 30;
  const stepX = (left - x) / frames;
  const stepY = (top - y) / frames;
  let i = 0;
  const interval = setInterval(() => {
    x += stepX;
    y += stepY;
    i++;
    elm.style.left = x + "px";
    elm.style.top = y + "px";
    if (i >= frames) {
      elm.style.left = x + "px";
      elm.style.top = y + "px";
      clearInterval(interval);
    }
  }, 30);
}

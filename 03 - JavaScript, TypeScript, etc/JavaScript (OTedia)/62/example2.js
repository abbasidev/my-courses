//// Animations with async functions
const shape = document.querySelector("#shape");

async function animate(n) {
  for (let i = 0; i < n; i++) {
    await rotate(shape, 90, 500);
    await move(shape, 300, 100, 2000);
    await rotate(shape, 180, 500);
    await move(shape, 300, 300, 2000);
    await rotate(shape, 270, 500);
    await move(shape, 100, 300, 2000);
    await rotate(shape, 360, 500);
    await move(shape, 100, 100, 2000);
    await rotate(shape, 0, 30); // for reset state to 0 deg
  }
}
animate(3);

function rotate(elm, endAngle, duration) {
  return new Promise(function (resolve, reject) {
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
        resolve();
      }
    }, 30);
  });
}

function move(elm, left, top, duration) {
  return new Promise(function (resolve, reject) {
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
        elm.style.left = left + "px";
        elm.style.top = top + "px";
        clearInterval(interval);
        resolve();
      }
    }, 30);
  });
}

//// Animations with async functions
const snowman = document.querySelector("#snowman");
const head1 = document.querySelector("#head1");
const head2 = document.querySelector("#head2");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");

async function animateSnowman() {
  await move(snowman, 485, -700, 200);
  await delay(4600);
  await move(snowman, 485, 0, 400);
  await delay(4600);
  await move(snowman, 485, -400, 200);
}

async function animateHead1() {
  await move(head1, 100, 30, 200);
  await scaleX(head1, 0.8, 200);
  await scaleX(head1, 1, 200);
  await delay(4200);
  await move(head1, 900, 30, 200);
  await delay(5000);
}

async function animateHead2() {
  await delay(4900);
  await move(head2, 100, 30, 200);
  await delay(4700);
  await move(head2, -300, 30, 200);
}

async function animateText1() {
  await move(text1, 160, 130, 300);
  await delay(4500);
  await move(text1, 900, 130, 300);
  await delay(4900);
}

async function animateText2() {
  await move(text2, 200, 180, 300);
  await delay(4500);
  await move(text2, -200, 180, 300);
  await delay(4900);
}

async function animateText3() {
  await delay(4700);
  await move(text3, 100, 130, 300);
  await delay(4700);
  await move(text3, -400, 130, 300);
}

async function animateText4() {
  await delay(4700);
  await move(text4, 200, 180, 400);
  await delay(4600);
  await move(text4, 900, 180, 300);
}

async function animate() {
  animateSnowman();
  animateHead1();
  animateHead2();
  animateText1();
  animateText2();
  animateText3();
  await animateText4();
  await delay(50);
  animate();
}
animate();

function delay(duration) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), duration);
  });
}

function scaleX(elm, endScale, duration) {
  return new Promise(function (resolve, reject) {
    let startScale = parseFloat(elm.style.transform.substr(7));
    if (Number.isNaN(startScale)) {
      startScale = 1;
    }
    let scale = startScale;
    let frames = duration / 15;
    let step = (endScale - startScale) / frames;
    let i = 0;
    const interval = setInterval(() => {
      scale += step;
      elm.style.transform = `scaleX(${scale})`;
      i++;
      if (i >= frames) {
        elm.style.transform = `scaleX(${endScale})`;
        clearInterval(interval);
        resolve();
      }
    }, 15);
  });
}

function move(elm, right, top, duration) {
  return new Promise(function (resolve, reject) {
    let x = parseInt(getComputedStyle(elm).getPropertyValue("right"));
    let y = parseInt(getComputedStyle(elm).getPropertyValue("top"));
    const frames = duration / 15;
    const stepX = (right - x) / frames;
    const stepY = (top - y) / frames;
    let i = 0;
    const interval = setInterval(() => {
      x += stepX;
      y += stepY;
      i++;
      elm.style.right = x + "px";
      elm.style.top = y + "px";
      if (i >= frames) {
        elm.style.right = right + "px";
        elm.style.top = top + "px";
        clearInterval(interval);
        resolve();
      }
    }, 15);
  });
}

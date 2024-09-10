//// screen Object یکی از آبجکت های بام هستش

const total = document.getElementById("total");
const available = document.getElementById("available");
const browser = document.getElementById("browser");
const viewport = document.getElementById("viewport");
const p = document.querySelector("p");

total.addEventListener("click", function () {
  let str = `width: ${screen.width} <br />
    height: ${screen.height}`;
  p.innerHTML = str;
});

available.addEventListener("click", function () {
  let str = `availWidth: ${screen.availWidth} <br />
    availHeight: ${screen.availHeight}`;
  p.innerHTML = str;
});

browser.addEventListener("click", function () {
  let str = `outerWidth: ${window.outerWidth} <br />
    outerHeight: ${window.outerHeight}`;
  p.innerHTML = str;
});

viewport.addEventListener("click", function () {
  let str = `innerWidth: ${window.innerWidth} <br />
    innerHeight: ${window.innerHeight}`;
  p.innerHTML = str;
});

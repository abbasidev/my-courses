//// navigator Object یکی از آبجکت های بام هستش

const agent = document.getElementById("agent");
const details = document.getElementById("details");
const p = document.querySelector("p");

agent.addEventListener("click", () => (p.innerHTML = navigator.userAgent)); //// userAgent مشخصات مرورگر رو نشون میده

details.addEventListener("click", function () {
  let str = `cookieEnabled: ${navigator.cookieEnabled} <br />
    language: ${navigator.language} <br />
    online: ${navigator.onLine} <br />
    platform: ${navigator.platform}`;

  p.innerHTML = str;
});

let ball = document.querySelector("#ball");
let offset = 10;

// //// متود اول برای ساخت انیمیشن (قدیمی)
// setInterval(function () {
//   ball.style.left = offset + "px";
//   offset += 1;
// }, 10);

//// (بهینه تر و تمیز تر) متود جدید برای ساخت انیمیشن
function animate() {
  ball.style.left = offset + "px";
  offset += 1;
  requestAnimationFrame(animate);
}
animate();

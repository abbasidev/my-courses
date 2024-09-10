//// Asynchronous Code
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
console.log(1);
button1.addEventListener("click", function () {
  console.log("Button 1 is clicked");
});

button2.addEventListener("click", function () {
  console.log("Button 2 is clicked");
});
console.log(2);

console.log(3);
setTimeout(function () {
  console.log("Time Out");
}, 4000);
console.log(4);

//// همه ی برنامه هارو نمیتونیم به صورت آسنکرون بنویسیم و حتما باید یسری دستورات از قبل اجرا شده باشه تا دستورات بعدی کار کنند
let a = 2,
  b = 3,
  c = 1;
let delta = b ** 2 - 4 * a * c;
r1 = (-b + Math.sqrt(delta)) / (2 * a);
r2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log("The roots: " + r1 + " , " + r2);

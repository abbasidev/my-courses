//// System Dialogs دیالوگ های سیستمی
//// نباید زیاد ازشون استفاده کنیم بیشتر برای تست خوبن نه برنامه های واقعی و توی هر مرورگر شکل متفاوتی دارن

const alertButton = document.getElementById("alert");
alertButton.addEventListener("click", function () {
  alert("Hello User");
});

const confirmButton = document.getElementById("confirm");
confirmButton.addEventListener("click", function () {
  let answer = confirm("آیا مطمئن هستید؟");
  if (answer) {
    alert("پاسخ شما مثبت بود");
  } else {
    alert("پاسخ شما منفی بود");
  }
});

const promptButton = document.getElementById("prompt");
promptButton.addEventListener("click", function () {
  let name = prompt("نام و نام خانوادگی خود را وارد کنید");
  let age = prompt("سن خود را وارد کنید", "33");
  let message = `شما ${name} هستید و ${age} سال دارید.`;
  alert(message);
});

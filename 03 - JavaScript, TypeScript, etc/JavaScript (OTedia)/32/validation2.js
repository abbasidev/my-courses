//// Form Validation - Part 2 //// نیاز به عبارات منظم دارد Regular Expression

const form1 = document.getElementById("form1");
form1.addEventListener("submit", validateYear);

function validateYear(event) {
  const year = document.getElementById("year");
  if (!/^\d+$/.test(year.value)) {
    year.nextElementSibling.innerHTML = "سال تولد باید یک عدد صحیح باشد";
    event.preventDefault();
  } else if (year.value < 1300 || year.value > 1400) {
    year.nextElementSibling.innerHTML = "سال تولد باید بین 1300 تا 1400 باشد";
    event.preventDefault();
  }
}

const form2 = document.getElementById("form2");
form2.addEventListener("submit", validateEmail);

function validateEmail(event) {
  const email = document.getElementById("email");
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailPattern.test(email.value)) {
    email.nextElementSibling.innerHTML = "لطفاً یک ایمیل معتبر وارد کنید";
    event.preventDefault();
  }
}

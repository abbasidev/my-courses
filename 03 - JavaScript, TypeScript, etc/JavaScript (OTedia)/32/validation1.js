//// Form Validation - Part 1

const form1 = document.getElementById("form1");
form1.addEventListener("submit", validate);

function validate(event) {
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");
  if (user.value.length < 5 || user.value.length > 15) {
    event.preventDefault();
    user.nextElementSibling.innerHTML = "نام کاربری باید 5 تا 15 کاراکتر باشد";
    user.focus();
  }
  if (pass.value.length < 6 || pass.value.length > 20) {
    event.preventDefault();
    pass.nextElementSibling.innerHTML = "کلمه‌ی عبور باید 6 تا 20 کاراکتر باشد";
  }
}

const form2 = document.getElementById("form2");
form2.addEventListener("submit", validateYear);

function validateYear(event) {
  const year = document.getElementById("year");
  if (!Number.isInteger(Number(year.value))) {
    year.nextElementSibling.innerHTML = "سال تولد باید یک عدد صحیح باشد";
    event.preventDefault();
  } else if (year.value < 1300 || year.value > 1400) {
    year.nextElementSibling.innerHTML = "سال تولد باید بین 1300 تا 1400 باشد";
    event.preventDefault();
  }
}

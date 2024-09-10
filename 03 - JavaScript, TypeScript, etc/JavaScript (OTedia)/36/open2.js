//// Open New Windows - Part 2

const google = document.getElementById("google");
const blank = document.getElementById("blank");
const self = document.getElementById("self");

google.addEventListener("click", function () {
  open("https://www.google.com", "google"); // چون اسم داره آرگومان دوم که گوگله اسمیه که براش انتخاب کردیم بخاطر همین با هر بار کلیک روی اوپن ادرس در این اسم فقط باز میشود
});

blank.addEventListener("click", function () {
  open("https://www.google.com", "_blank"); // حالت پیش فرض آرگومان دوم بلنک میباشد و اگه نزاریمش همین در نظر گرفته میشود
});

self.addEventListener("click", function () {
  open("https://www.google.com", "_self"); // سلف هم پنجره جدیدی باز نمیکنه در پنجره فعلی باز میکنه
});

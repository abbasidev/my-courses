//// Open New Windows - Part 1

const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
let pointer;

openButton.addEventListener("click", function () {
  pointer = open("https://www.google.com");
});

closeButton.addEventListener("click", function () {
  // window.close(); // صفحه جاری رو میبنده
  pointer.close();
});

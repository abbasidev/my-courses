const observeButton1 = document.getElementById("observe1");
const observeButton2 = document.getElementById("observe2");
const unobserveButton1 = document.getElementById("unobserve1");
const unobserveButton2 = document.getElementById("unobserve2");
const disconnectButton = document.getElementById("disconnect");

const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");

const observer = new ResizeObserver((entries, ob) => {
  console.log(entries);
  // console.log(ob);
  // console.log(entries[0]);
});

observeButton1.addEventListener("click", () => {
  observer.observe(textarea1);
});

observeButton2.addEventListener("click", () => {
  observer.observe(textarea2);
});

unobserveButton1.addEventListener("click", () => {
  observer.unobserve(textarea1);
});

unobserveButton2.addEventListener("click", () => {
  observer.unobserve(textarea2);
});

disconnectButton.addEventListener("click", () => {
  observer.disconnect();
});

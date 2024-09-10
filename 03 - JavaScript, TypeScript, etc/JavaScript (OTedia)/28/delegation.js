//// Event Delegation نمایندگی کردن رویداد

const ul = document.querySelector("ul");
const p = document.querySelector("p");
const button = document.querySelector("button");

ul.addEventListener("click", handler);

function handler(event) {
  p.textContent = event.target.textContent;
}

button.addEventListener("click", () => {
  ul.innerHTML += "<li>Lemon</li><li>Lime</li>";
});

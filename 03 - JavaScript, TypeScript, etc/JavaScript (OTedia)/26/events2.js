//// Mouse Events - Part 2

const outer = document.getElementById("outer");
const p = document.querySelector("p");

outer.addEventListener("mouseover", handler);
outer.addEventListener("mouseout", handler);
outer.addEventListener("mouseenter", handler);
outer.addEventListener("mouseleave", handler);
outer.addEventListener("mousemove", handler);

function handler(event) {
  p.innerHTML += event.type + " ";
}

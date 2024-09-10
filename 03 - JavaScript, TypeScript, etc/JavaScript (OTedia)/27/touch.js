//// Touch Events

const main = document.getElementById("main");
const p = document.querySelector("p");

// main.addEventListener('click', handler);
// main.addEventListener('touchstart', handler);
// main.addEventListener('touchend', handler);
main.addEventListener("touchmove", handler);

function handler(event) {
  p.textContent += event.type + " ";

  let html = `Touches: ${event.touches.length}<br />`;

  html += `clientX: ${event.touches[0].clientX} , 
                clientY: ${event.touches[0].clientY}<br />`;

  html += `pageX: ${event.touches[0].pageX} , 
                pageY: ${event.touches[0].pageY}<br />`;

  html += `screenX: ${event.touches[0].screenX} , 
                screenY: ${event.touches[0].screenY}<br />`;

  main.innerHTML = html;
}

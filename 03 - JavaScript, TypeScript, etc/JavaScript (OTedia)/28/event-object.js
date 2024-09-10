//// Event Object

const main = document.getElementById("main");
const body = document.body;

main.addEventListener("click", handler);
body.addEventListener("click", handler, true);
body.addEventListener("click", handler, false);

function handler(event) {
  let str = `target: ${event.target.nodeName} <br />
	currentTarget: ${event.currentTarget.nodeName} <br />
	eventPhase: ${event.eventPhase} <hr />`;
  main.innerHTML += str;
}

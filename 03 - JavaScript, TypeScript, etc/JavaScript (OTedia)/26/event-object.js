//// Event Object

let main = document.getElementById("main");
main.addEventListener("mousedown", handler);

function handler(event) {
  let html = `Event Type: ${event.type}<br />`;

  html += `Target: ${event.target.nodeName}<br />`;

  html += `clientX: ${event.clientX} ,
                 clientY: ${event.clientY}<br />`;

  html += `offsetX: ${event.offsetX} ,
                offsetY: ${event.offsetY}<br />`;

  html += `pageX: ${event.pageX} , 
                pageY: ${event.pageY}<br />`;

  html += `screenX: ${event.screenX} , 
                screenY: ${event.screenY}<br />`;

  html += `Alt: ${event.altKey}<br />`;

  html += `Ctrl: ${event.ctrlKey}<br />`;

  html += `Shift: ${event.shiftKey}<br />`;

  html += `Button: ${event.button}`;

  main.innerHTML = html;
}

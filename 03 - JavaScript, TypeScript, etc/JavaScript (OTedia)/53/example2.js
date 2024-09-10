//// load and error events
const send = document.querySelector("#send");

send.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  //// error
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1568");
  xhr.addEventListener("load", function () {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      console.log(xhr.responseText);
    }
    //// error
    else {
      console.error("Status: " + xhr.status);
    }
  });

  //// error
  //// network رو آفلاین کن
  //// error event
  xhr.addEventListener("error", function () {
    console.error("Error: " + xhr.status);
  });

  xhr.send();
});

//// loadstart and loadend events
const loading = document.querySelector("#load");
let load, start, end;

loading.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

  xhr.addEventListener("load", function () {
    load = Date.now();
    console.log("load : " + load);
  });

  xhr.addEventListener("loadstart", function () {
    start = Date.now();
    console.log("load start : " + start);
  });

  xhr.addEventListener("loadend", function () {
    end = Date.now();
    console.log("load end : " + end);
  });

  xhr.send();
});

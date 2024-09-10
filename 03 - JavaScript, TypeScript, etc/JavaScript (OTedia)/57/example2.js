//// Solve Callback Hell Problem
const send = document.querySelector("#send");

send.addEventListener("click", function () {
  console.log("Start");

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      return response.text();
    })
    .then((text) => {
      console.log(text);
      return fetch("https://jsonplaceholder.typicode.com/todos/2");
    })
    .then(function (response) {
      return response.text();
    })
    .then((text) => {
      console.log(text);
      return fetch("https://jsonplaceholder.typicode.com/todos/3");
    })
    .then(function (response) {
      return response.text();
    })
    .then((text) => {
      console.log(text);
      return fetch("https://jsonplaceholder.typicode.com/todos/4");
    })
    .then(function (response) {
      return response.text();
    })
    .then((text) => {
      console.log(text);
    });

  console.log("End");
});
